"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FuncionarioSchema extends Schema {
  up() {
    this.create("funcionarios", (table) => {
      table.increments();
      table.string("nome", 50).notNullable();
      table.float("salario").notNullable();
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
    this.drop("funcionarios");
  }
}

module.exports = FuncionarioSchema;
