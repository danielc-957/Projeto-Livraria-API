"use strict";

/*
|--------------------------------------------------------------------------
| EditoraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Editora = use("App/Models/Editora");
class EditoraSeeder {
  async run() {
    await Editora.createMany([
      { nome: "Fontanar" },
      { nome: "Record" },
      { nome: "ViaLeitura" },
      { nome: "Lê" },
      { nome: "Sextante" },
      { nome: "Atual" },
      { nome: "Best Seller" },
      { nome: "Pandorga" },
      { nome: "Intríseca" },
      { nome: "Casa Lygia Bojunga" },
      { nome: "Global" },
      { nome: "Moderna" },
      { nome: "José Olympio" },
      { nome: "Ática" },
      { nome: "Faro" },
      { nome: "Astral Cultural" },
      { nome: "Clímaco" },
      { nome: "Nova Fronteira" },
      { nome: "Gutenberg" },
      { nome: "Melhoramentos" },
      { nome: "Verus" },
      { nome: "Conrad" },
      { nome: "Quadrinhos na Cia" },
      { nome: "WMF Martins Fontes" },
      { nome: "Nova Cultural" },
      { nome: "Maurício de Sousa " },
      { nome: "FTD" },
    ]);
  }
}

module.exports = EditoraSeeder;
