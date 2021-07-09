"use strict";

const ValidatorAbstract = use("App/Validators/ValidatorAbstract");

class Livro extends ValidatorAbstract {
  get rules() {
    return {
      nome: "required|max:50",
      ano_lancamento: "integer|required",
      edicao: "required|max:20",
      isbn: "required|min:10|max:17",
      numero_paginas: "required|max:4",
      sinopse: "required|max:500",
      cod_barras: "required|max:45",
      valor: "number|required",
      editora_id: "integer|required",
    };
  }
}

module.exports = Livro;
