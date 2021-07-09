"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with autors
 */

const Autor = use("App/Models/Autor");

class AutorController {
  /**
   * Show a list of all autors.
   * GET autors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, perPage } = request.all();
    return Autor.query().with("livros").paginate(page, perPage);
    //return Autor.query().paginate(page, perPage);
  }

  /**
   * Create/save a new autor.
   * POST autors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Autor.getCamposCadastro();
    const dados = request.only(campos);

    return await Autor.create(dados);
  }

  /**
   * Display a single autor.
   * GET autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return Autor.query().where("id", params.id).with("livros").first();
  }

  /**
   * Update autor details.
   * PUT or PATCH autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const campos = Autor.getCamposCadastro();
    const dados = request.only(campos);
    const autor = await Autor.findOrFail(params.id);
    autor.merge(dados);
    await autor.save();
    return autor;
  }

  /**
   * Delete a autor with id.
   * DELETE autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const autor = await Autor.findOrFail(params.id);
    return await autor.delete();
  }
}

module.exports = AutorController;
