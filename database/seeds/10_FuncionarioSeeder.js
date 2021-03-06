"use strict";

/*
|--------------------------------------------------------------------------
| FuncionarioSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const Funcionario = use("App/Models/Funcionario");
class FuncionarioSeeder {
  async run() {
    await Funcionario.createMany([
      {
        nome: "Lia Barreno Barros",
        salario: 3500.0,
        cep: "72740260",
        logradouro: "QNE 23",
        numero_lote: "12",
        complemento: "Casa",
        cidade: "Ceilândia",
        bairro: "Ceilândia Sul",
        uf: "DF",
      },
      {
        nome: "Rosarinho Coelho Toscano",
        salario: 4600.0,
        cep: "72621530",
        logradouro: "QNN 45",
        numero_lote: "24",
        complemento: "Casa",
        cidade: "Taguatinga",
        bairro: "Taguatinga Norte",
        uf: "DF",
      },
      {
        nome: "Liedson Dorneles Cachão",
        salario: 1500.0,
        cep: "72698412",
        logradouro: "QNP 05 Rua 12",
        numero_lote: "11",
        complemento: "Bloco L apartamento 1",
        cidade: "São Sebastião",
        bairro: "",
        uf: "DF",
      },
      {
        nome: "Samaritana Cedro Rosado",
        salario: 3000.0,
        cep: "72225632",
        logradouro: "Quadra 202 rua 10 ",
        numero_lote: "15",
        complemento: "Bloco B apartamento 03",
        cidade: "Recanto das Emas",
        bairro: "",
        uf: "DF",
      },
      {
        nome: "Stephen Perdigão Vinhas",
        salario: 3000.0,
        cep: "72231452",
        logradouro: "QNE 15",
        numero_lote: "01",
        complemento: "Casa",
        cidade: "Ceilândia",
        bairro: "Ceilândia Norte",
        uf: "DF",
      },
      {
        nome: "Soraia Quintas Peseiro",
        salario: 4500.0,
        cep: "72263302",
        logradouro: "QNP 05 conjunto O",
        numero_lote: "04",
        complemento: "Bloco 10 apartamento 19",
        cidade: "",
        bairro: "Ceilândia",
        uf: "DF",
      },
      {
        nome: "Sancho Frazão Resende",
        salario: 6000.0,
        cep: "72256984",
        logradouro: "QNN 05 ",
        numero_lote: "09",
        complemento: "Casa",
        cidade: "Ceilândia",
        bairro: "Ceilândia Sul",
        uf: "DF",
      },
      {
        nome: "Edson Águeda Barateiro",
        salario: 7000.0,
        cep: "74126352",
        logradouro: "QNO 13",
        numero_lote: "16",
        complemento: "Bloco 02 apartamento 22",
        cidade: "Brasília",
        bairro: "Asa Sul",
        uf: "DF",
      },
      {
        nome: "Layra Barreiros Câmara",
        salario: 2000.0,
        cep: "72665952",
        logradouro: "Quadra 5 Rua 4",
        numero_lote: "13",
        complemento: "Casa",
        cidade: "Brasília",
        bairro: "Asa Norte",
        uf: "DF",
      },
      {
        nome: "Giovanna Ximenes Júdice",
        salario: 3500.0,
        cep: "72236210",
        logradouro: "QNE 55",
        numero_lote: "11",
        complemento: "Casa",
        cidade: "Guará",
        bairro: "",
        uf: "DF",
      },
      {
        nome: "Antero Soveral Simão",
        salario: 3000.0,
        cep: "72665598",
        logradouro: "QNN 01",
        numero_lote: "44",
        complemento: "Bloco AB apartamento 01",
        cidade: "Candangolândia",
        bairro: "",
        uf: "DF",
      },
      {
        nome: "Isís Carvalhal Esteves",
        salario: 2600.0,
        cep: "72330214",
        logradouro: "QNP 05",
        numero_lote: "77",
        complemento: "Casa",
        cidade: "Ceilândia",
        bairro: "Ceilândia Sul",
        uf: "DF",
      },
      {
        nome: "Luke Aquino Sacramento",
        salario: 2000.0,
        cep: "72663321",
        logradouro: "Quadra 04",
        numero_lote: "55",
        complemento: "Casa",
        cidade: "Ceilândia",
        bairro: "Ceilândia Norte",
        uf: "DF",
      },
      {
        nome: "Eliza Silveira Granja",
        salario: 1600.0,
        cep: "72995854",
        logradouro: "QNO 13",
        numero_lote: "16",
        complemento: "Bloco C apartamento 13",
        cidade: "Recanto das Emas",
        bairro: "",
        uf: "DF",
      },
      {
        nome: "KellY Bouças Miguéis",
        salario: 3500.0,
        cep: "72665412",
        logradouro: "Rua 25 Quadra 04",
        numero_lote: "12",
        complemento: "Casa",
        cidade: "Ceilândia",
        bairro: "Ceilândia Norte",
        uf: "DF",
      },
      {
        nome: "Silvestre Aires Manso",
        salario: 5500.0,
        cep: "72330148",
        logradouro: "Quadra 01",
        numero_lote: "10",
        complemento: "Casa",
        cidade: "Taguatinga",
        bairro: "Taguatinga Sul",
        uf: "DF",
      },
      {
        nome: "Belchior Aleixo Mota",
        salario: 4000.0,
        cep: "72965147",
        logradouro: "Quadra 5",
        numero_lote: "19",
        complemento: "Casa",
        cidade: "Ceilândia",
        bairro: "Setor O",
        uf: "DF",
      },
      {
        nome: "Artur Tigre Castilho",
        salario: 6000.0,
        cep: "72669523",
        logradouro: "Rua 223",
        numero_lote: "16",
        complemento: "Casa",
        cidade: "Recanto das Emas",
        bairro: "",
        uf: "DF",
      },
      {
        nome: "Izabella Lins Travassos",
        salario: 4000.0,
        cep: "72236541",
        logradouro: "QNN 20",
        numero_lote: "11",
        complemento: "Bloco 15 apartamento 03",
        cidade: "Taguatinga",
        bairro: "Taguatinga Sul",
        uf: "DF",
      },
    ]);
  }
}

module.exports = FuncionarioSeeder;
