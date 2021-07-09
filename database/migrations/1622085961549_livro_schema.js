"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LivroSchema extends Schema {
  up() {
    this.create("livros", (table) => {
      table.increments();
      table.string("nome", 50).notNullable();
      table.integer("ano_lancamento").notNullable();
      table.string("edicao", 20).notNullable();
      table.string("isbn", 17).notNullable();
      table.int("numero_paginas").notNullable();
      table.string("sinopse", 500).notNullable();
      table.string("cod_barras", 45).notNullable();
      table.float("valor").notNullable();
      table
        .integer("editora_id")
        .references("id")
        .inTable("editoras")
        .unsigned()
        .notNullable();

      table.timestamps();
    });
  }

  down() {
    this.drop("livros");
  }
}

module.exports = LivroSchema;
