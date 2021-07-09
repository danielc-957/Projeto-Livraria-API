"use strict";

/*
|--------------------------------------------------------------------------
| AutorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Autor = use("App/Models/Autor");
class AutorSeeder {
  async run() {
    await Autor.createMany([
      { nome: "Alejandro Ghilhermo Roemmers" },
      { nome: "Graciliano Ramos" },
      { nome: "Machado de Assis" },
      { nome: "José Carlos Leal" },
      { nome: "William Paul Young" },
      { nome: "Mirna Pinsky" },
      { nome: "Marian Keyes" },
      { nome: "Lerris Carroll" },
      { nome: "John Green" },
      { nome: "Lygia Bojunga" },
      { nome: "João Carlos Marinho" },
      { nome: "Isabel Vieira" },
      { nome: "Maurice Druon" },
      { nome: "Pedro Bandeira" },
      { nome: "Jojo Moyes" },
      { nome: "Fabíola Simões" },
      { nome: "Vanessa Bosso" },
      { nome: "Jenny Han" },
      { nome: "José de Alencar" },
      { nome: "Cecília Vasconcelos" },
      { nome: "Bruna Vieira" },
      { nome: "Isabela Freitas" },
      { nome: "José Mauro de Vasconcelos" },
      { nome: "Eduardo Spohr" },
      { nome: "Terry Pratchett" },
      { nome: "Bryan Lee O'Malley" },
      { nome: "Clive Staples Lewis" },
      { nome: "Alexandre Dumas" },
      { nome: "Babi Dewet" },
      { nome: "Carol Christo" },
      { nome: "Melina Souza" },
      { nome: "Pam Gonçalves" },
      { nome: "Fernando Sabino" },
      { nome: "Paulo Mendes Campos" },
      { nome: "Rubens Braga" },
      { nome: "Carlos Drummond de Andrade" },
      { nome: "Victor Hugo" },
    ]);
  }
}

module.exports = AutorSeeder;
