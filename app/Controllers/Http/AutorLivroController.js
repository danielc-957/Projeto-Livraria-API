"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with autorLivros
 */

const AutorLivro = use("App/Models/AutorLivro");

class AutorLivroController {
  /**
   * Show a list of all autorLivros.
   * GET autorLivros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, perPage } = request.all();
    return AutorLivro.query().paginate(page, perPage);
  }

  /**
   * Create/save a new autorLivro.
   * POST autorLivros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = AutorLivro.getCamposCadastro();
    const dados = request.only(campos);

    return await AutorLivro.create(dados);
  }

  /**
   * Display a single autorLivro.
   * GET autorLivros/:id
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
   * Update autorLivro details.
   * PUT or PATCH autorLivros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const campos = AutorLivro.getCamposCadastro();
    const dados = request.only(campos);
    const autorLivro = await AutorLivro.findOrFail(params.id);
    autorLivro.merge(dados);
    await autorLivro.save();
    return autorLivro;
  }

  /**
   * Delete a autorLivro with id.
   * DELETE autorLivros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const autorLivro = await AutorLivro.findOrFail(params.id);
    return await autorLivro.delete();
  }
}

module.exports = AutorLivroController;
