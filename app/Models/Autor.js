"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Autor extends Model {
  static get table() {
    return "autores";
  }

  static getCamposCadastro() {
    return ["nome"];
  }

  livros() {
    return this.belongsToMany("App/Models/Livro").pivotTable("autor_livros");
  }
}

module.exports = Autor;
