"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Cliente extends Model {
  static getCamposCadastro() {
    return [
      "nome",
      "cpf",
      "email",
      "telefone",
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

module.exports = Cliente;
