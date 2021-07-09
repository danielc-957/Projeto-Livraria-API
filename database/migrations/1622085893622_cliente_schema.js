"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClienteSchema extends Schema {
  up() {
    this.create("clientes", (table) => {
      table.increments();
      table.string("nome", 50).notNullable();
      table.string("cpf", 14).notNullable();
      table.string("email", 70).notNullable();
      table.string("telefone", 15).notNullable();
      table.string("cep", 8);
      table.string("logradouro", 100);
      table.int("numero_lote");
      table.string("complemento", 50);
      table.string("cidade", 20);
      table.string("bairro", 100);
      table.string("uf", 2);
      table.timestamps();
    });
  }

  down() {
    this.drop("clientes");
  }
}

module.exports = ClienteSchema;
