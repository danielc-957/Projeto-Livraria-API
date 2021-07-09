"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompraSchema extends Schema {
  up() {
    this.create("compras", (table) => {
      table.increments();
      table.string("cod", 20).notNullable();
      table.float("valor_total").notNullable();
      table.date("data").notNullable();
      table
        .integer("funcionario_id")
        .references("id")
        .inTable("funcionarios")
        .unsigned()
        .notNullable();
      table
        .integer("cliente_id")
        .references("id")
        .inTable("clientes")
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("compras");
  }
}

module.exports = CompraSchema;
