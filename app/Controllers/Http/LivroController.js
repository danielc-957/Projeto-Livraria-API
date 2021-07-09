"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with livros
 */

const Livro = use("App/Models/Livro");

class LivroController {
  /**
   * Show a list of all livros.
   * GET livros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, perPage } = request.all();
    return Livro.query().paginate(page, perPage);
    // return Livro.query()
    //   .with("editora")
    //   .with("autores")
    //   .with("categorias")
    //   .with("compras")
    //   .paginate(page, perPage);
  }

  /**
   * Create/save a new livro.
   * POST livros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Livro.getCamposCadastro();
    const dados = request.only(campos);

    return await Livro.create(dados);
  }

  /**
   * Display a single livro.
   * GET livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return Livro.query()
      .where("id", params.id)
      .with("editora")
      .with("autores")
      .with("categorias")
      .with("compras")
      .first();

    //return Livro.query().where("id", params.id).first();
  }

  /**
   * Update livro details.
   * PUT or PATCH livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const campos = Livro.getCamposCadastro();
    const dados = request.only(campos);
    const livro = await Livro.findOrFail(params.id);
    livro.merge(dados);
    await livro.save();
    return livro;
  }

  /**
   * Delete a livro with id.
   * DELETE livros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const livro = await Livro.findOrFail(params.id);
    return await livro.delete();
  }
}

module.exports = LivroController;
