"use strict";

/*
|--------------------------------------------------------------------------
| AutorLivroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const AutorLivro = use("App/Models/AutorLivro");
class AutorLivroSeeder {
  async run() {
    await AutorLivro.createMany([
      { autor_id: 1, livro_id: 1 },
      { autor_id: 2, livro_id: 2 },
      { autor_id: 3, livro_id: 3 },
      { autor_id: 4, livro_id: 4 },
      { autor_id: 5, livro_id: 5 },
      { autor_id: 6, livro_id: 6 },
      { autor_id: 7, livro_id: 7 },
      { autor_id: 8, livro_id: 8 },
      { autor_id: 9, livro_id: 9 },
      { autor_id: 10, livro_id: 10 },
      { autor_id: 11, livro_id: 11 },
      { autor_id: 12, livro_id: 12 },
      { autor_id: 13, livro_id: 13 },
      { autor_id: 14, livro_id: 14 },
      { autor_id: 15, livro_id: 15 },
      { autor_id: 16, livro_id: 16 },
      { autor_id: 17, livro_id: 17 },
      { autor_id: 18, livro_id: 18 },
      { autor_id: 19, livro_id: 19 },
      { autor_id: 20, livro_id: 20 },
      { autor_id: 21, livro_id: 21 },
      { autor_id: 22, livro_id: 22 },
      { autor_id: 23, livro_id: 23 },
      { autor_id: 24, livro_id: 24 },
      { autor_id: 25, livro_id: 25 },
      { autor_id: 26, livro_id: 26 },
      { autor_id: 27, livro_id: 27 },
      { autor_id: 28, livro_id: 28 },
      { autor_id: 29, livro_id: 29 },
      { autor_id: 30, livro_id: 29 },
      { autor_id: 31, livro_id: 29 },
      { autor_id: 32, livro_id: 29 },
      { autor_id: 33, livro_id: 30 },
      { autor_id: 34, livro_id: 30 },
      { autor_id: 35, livro_id: 30 },
      { autor_id: 36, livro_id: 30 },
      { autor_id: 37, livro_id: 31 },
    ]);
  }
}

module.exports = AutorLivroSeeder;
