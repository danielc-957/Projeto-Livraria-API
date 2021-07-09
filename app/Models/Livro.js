"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Livro extends Model {
  static getCamposCadastro() {
    return [
      "nome",
      "ano_lancamento",
      "edicao",
      "isbn",
      "numero_paginas",
      "sinopse",
      "cod_barras",
      "valor",
      "editora_id",
    ];
  }

  editora() {
    return this.belongsTo("App/Models/Editora");
  }

  autores() {
    return this.belongsToMany("App/Models/Autor").pivotTable("autor_livros");
  }

  categorias() {
    return this.belongsToMany("App/Models/Categoria").pivotTable(
      "livro_categorias"
    );
  }

  compras() {
    return this.belongsToMany("App/Models/Compra").pivotTable("livro_compras");
  }
}

module.exports = Livro;
