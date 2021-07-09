"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LivroCompraSchema extends Schema {
  up() {
    this.create("livro_compras", (table) => {
      table.increments();
      table
        .integer("livro_id")
        .references("id")
        .inTable("livros")
        .unsigned()
        .notNullable();
      table
        .integer("compra_id")
        .references("id")
        .inTable("compras")
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("livro_compras");
  }
}

module.exports = LivroCompraSchema;
