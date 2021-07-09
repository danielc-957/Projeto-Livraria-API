"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with editoras
 */

const Editora = use("App/Models/Editora");

class EditoraController {
  /**
   * Show a list of all editoras.
   * GET editoras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const { page, perPage } = request.all();
    return Editora.query().paginate(page, perPage);
    //return Editora.query().with("livros").paginate(page, perPage);
  }

  /**
   * Create/save a new editora.
   * POST editoras
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const campos = Editora.getCamposCadastro();
    const dados = request.only(campos);

    return await Editora.create(dados);
  }

  /**
   * Display a single editora.
   * GET editoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return Editora.query().where("id", params.id).with("livros").first();
  }

  /**
   * Update editora details.
   * PUT or PATCH editoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const campos = Editora.getCamposCadastro();
    const dados = request.only(campos);
    const editora = await Editora.findOrFail(params.id);
    editora.merge(dados);
    await editora.save();
    return editora;
  }

  /**
   * Delete a editora with id.
   * DELETE editoras/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const editora = await Editora.findOrFail(params.id);
    return await editora.delete();
  }
}

module.exports = EditoraController;
