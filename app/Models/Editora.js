"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Editora extends Model {
  static getCamposCadastro() {
    return ["nome"];
  }

  livros() {
    return this.hasMany("App/Models/Livro");
  }
}

module.exports = Editora;
