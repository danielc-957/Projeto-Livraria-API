"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with livroCompras
 */

const LivroCompra = use("App/Models/LivroCompra");

class LivroCompraController {
  /**
   * Show a list of all livroCompras.
   * GET livroCompras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, perPage } = request.all();
    return LivroCompra.query().paginate(page, perPage);
  }

  /**
   * Create/save a new livroCompra.
   * POST livroCompras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = LivroCompra.getCamposCadastro();
    const dados = request.only(campos);

    return await LivroCompra.create(dados);
  }

  /**
   * Display a single livroCompra.
   * GET livroCompras/:id
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
   * Update livroCompra details.
   * PUT or PATCH livroCompras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const campos = LivroCompra.getCamposCadastro();
    const dados = request.only(campos);
    const livroCompra = await LivroCompra.findOrFail(params.id);
    livroCompra.merge(dados);
    await livroCompra.save();
    return livroCompra;
  }

  /**
   * Delete a livroCompra with id.
   * DELETE livroCompras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const livroCompra = await LivroCompra.findOrFail(params.id);
    return await livroCompra.delete();
  }
}

module.exports = LivroCompraController;
