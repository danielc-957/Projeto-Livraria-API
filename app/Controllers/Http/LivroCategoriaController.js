"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with livroCategorias
 */

const LivroCategoria = use("App/Models/LivroCategoria");

class LivroCategoriaController {
  /**
   * Show a list of all livroCategorias.
   * GET livroCategorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, perPage } = request.all();
    return LivroCategoria.query().paginate(page, perPage);
  }

  /**
   * Create/save a new livroCategoria.
   * POST livroCategorias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = LivroCategoria.getCamposCadastro();
    const dados = request.only(campos);

    return await LivroCategoria.create(dados);
  }

  /**
   * Display a single livroCategoria.
   * GET livroCategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return Livro.query().where("id", params.id).with("nomeAqui").first();
  }

  /**
   * Update livroCategoria details.
   * PUT or PATCH livroCategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const campos = LivroCategoria.getCamposCadastro();
    const dados = request.only(campos);
    const livroCategoria = await LivroCategoria.findOrFail(params.id);
    livroCategoria.merge(dados);
    await livroCategoria.save();
    return livroCategoria;
  }

  /**
   * Delete a livroCategoria with id.
   * DELETE livroCategorias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const livroCategoria = await LivroCategoria.findOrFail(params.id);
    return await livroCategoria.delete();
  }
}

module.exports = LivroCategoriaController;
