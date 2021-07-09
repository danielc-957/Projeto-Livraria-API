"use strict";

/*
|--------------------------------------------------------------------------
| LivroCompraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const LivroCompra = use("App/Models/LivroCompra");

class LivroCompraSeeder {
  async run() {
    await LivroCompra.createMany([
      { compra_id: 1, livro_id: 1 },
      { compra_id: 2, livro_id: 2 },
      { compra_id: 2, livro_id: 23 },
      { compra_id: 3, livro_id: 3 },
      { compra_id: 4, livro_id: 4 },
      { compra_id: 5, livro_id: 5 },
      { compra_id: 5, livro_id: 16 },
      { compra_id: 6, livro_id: 6 },
      { compra_id: 7, livro_id: 7 },
      { compra_id: 8, livro_id: 8 },
      { compra_id: 9, livro_id: 9 },
      { compra_id: 9, livro_id: 10 },
      { compra_id: 10, livro_id: 10 },
      { compra_id: 11, livro_id: 11 },
      { compra_id: 12, livro_id: 12 },
      { compra_id: 12, livro_id: 16 },
      { compra_id: 13, livro_id: 13 },
      { compra_id: 13, livro_id: 11 },
      { compra_id: 14, livro_id: 14 },
      { compra_id: 14, livro_id: 19 },
      { compra_id: 15, livro_id: 15 },
      { compra_id: 16, livro_id: 16 },
      { compra_id: 17, livro_id: 17 },
      { compra_id: 18, livro_id: 18 },
      { compra_id: 19, livro_id: 19 },
      { compra_id: 19, livro_id: 21 },
      { compra_id: 20, livro_id: 20 },
      { compra_id: 20, livro_id: 14 },
      { compra_id: 21, livro_id: 21 },
      { compra_id: 22, livro_id: 22 },
      { compra_id: 22, livro_id: 19 },
      { compra_id: 23, livro_id: 23 },
      { compra_id: 23, livro_id: 20 },
      { compra_id: 23, livro_id: 26 },
      { compra_id: 23, livro_id: 23 },
      { compra_id: 24, livro_id: 24 },
      { compra_id: 25, livro_id: 25 },
      { compra_id: 25, livro_id: 28 },
      { compra_id: 26, livro_id: 26 },
      { compra_id: 27, livro_id: 27 },
      { compra_id: 27, livro_id: 14 },
      { compra_id: 28, livro_id: 28 },
      { compra_id: 29, livro_id: 29 },
      { compra_id: 29, livro_id: 31 },
      { compra_id: 30, livro_id: 30 },
      { compra_id: 30, livro_id: 21 },
      { compra_id: 31, livro_id: 31 },
      { compra_id: 31, livro_id: 5 },
    ]);
  }
}

module.exports = LivroCompraSeeder;
