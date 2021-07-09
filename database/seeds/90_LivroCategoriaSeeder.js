"use strict";

/*
|--------------------------------------------------------------------------
| LivroCategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const LivroCategoria = use("App/Models/LivroCategoria");

class LivroCategoriaSeeder {
  async run() {
    await LivroCategoria.createMany([
      { livro_id: 1, categoria_id: 1 },
      { livro_id: 2, categoria_id: 2 },
      { livro_id: 3, categoria_id: 2 },
      { livro_id: 4, categoria_id: 3 },
      { livro_id: 5, categoria_id: 4 },
      { livro_id: 6, categoria_id: 5 },
      { livro_id: 7, categoria_id: 4 },
      { livro_id: 8, categoria_id: 5 },
      { livro_id: 9, categoria_id: 4 },
      { livro_id: 10, categoria_id: 5 },
      { livro_id: 11, categoria_id: 4 },
      { livro_id: 12, categoria_id: 5 },
      { livro_id: 13, categoria_id: 5 },
      { livro_id: 14, categoria_id: 5 },
      { livro_id: 15, categoria_id: 6 },
      { livro_id: 16, categoria_id: 7 },
      { livro_id: 17, categoria_id: 4 },
      { livro_id: 18, categoria_id: 4 },
      { livro_id: 19, categoria_id: 2 },
      { livro_id: 20, categoria_id: 5 },
      { livro_id: 21, categoria_id: 3 },
      { livro_id: 22, categoria_id: 8 },
      { livro_id: 23, categoria_id: 5 },
      { livro_id: 24, categoria_id: 4 },
      { livro_id: 25, categoria_id: 4 },
      { livro_id: 26, categoria_id: 4 },
      { livro_id: 27, categoria_id: 4 },
      { livro_id: 28, categoria_id: 3 },
      { livro_id: 29, categoria_id: 3 },
      { livro_id: 30, categoria_id: 3 },
      { livro_id: 31, categoria_id: 5 },
    ]);
  }
}

module.exports = LivroCategoriaSeeder;
