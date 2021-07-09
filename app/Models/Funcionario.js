"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Funcionario extends Model {
  static getCamposCadastro() {
    return [
      "nome",
      "salario",
      "cep",
      "logradouro",
      "numero_lote",
      "complemento",
      "cidade",
      "bairro",
      "uf",
    ];
  }

  compras() {
    return this.hasMany("App/Models/Compra");
  }
}

module.exports = Funcionario;
