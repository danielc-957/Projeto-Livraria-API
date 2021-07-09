"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with compras
 */

const Compra = use("App/Models/Compra");

class CompraController {
  /**
   * Show a list of all compras.
   * GET compras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, perPage } = request.all();
    return Compra.query()
      .with("funcionario")
      .with("cliente")
      .with("livros")
      .paginate(page, perPage);
  }

  /**
   * Create/save a new compra.
   * POST compras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Compra.getCamposCadastro();
    const dados = request.only(campos);

    return await Compra.create(dados);
  }

  /**
   * Display a single compra.
   * GET compras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return Compra.query()
      .where("id", params.id)
      .with("funcionario")
      .with("cliente")
      .with("livros")
      .first();
  }

  /**
   * Update compra details.
   * PUT or PATCH compras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const campos = Compra.getCamposCadastro();
    const dados = request.only(campos);
    const compra = await Compra.findOrFail(params.id);
    compra.merge(dados);
    await compra.save();
    return compra;
  }

  /**
   * Delete a compra with id.
   * DELETE compras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const compra = await Compra.findOrFail(params.id);
    return await compra.delete();
  }
}

module.exports = CompraController;
