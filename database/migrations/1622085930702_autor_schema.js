"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AutorSchema extends Schema {
  up() {
    this.create("autores", (table) => {
      table.increments();
      table.string("nome", 50).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("autores");
  }
}

module.exports = AutorSchema;
