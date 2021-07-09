"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class AutorLivro extends Model {
  static getCamposCadastro() {
    return ["autor_id", "livro_id"];
  }
}

module.exports = AutorLivro;
