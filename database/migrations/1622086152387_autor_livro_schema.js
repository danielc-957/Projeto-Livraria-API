"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AutorLivroSchema extends Schema {
  up() {
    this.create("autor_livros", (table) => {
      table.increments();
      table
        .integer("autor_id")
        .references("id")
        .inTable("autores")
        .unsigned()
        .notNullable();
      table
        .integer("livro_id")
        .references("id")
        .inTable("livros")
        .unsigned()
        .notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("autor_livros");
  }
}

module.exports = AutorLivroSchema;
