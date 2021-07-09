"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class LivroCategoria extends Model {
  static getCamposCadastro() {
    return ["livro_id", "categoria_id"];
  }
}

module.exports = LivroCategoria;
