"use strict";

/*
|--------------------------------------------------------------------------
| CompraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Compra = use("App/Models/Compra");
class CompraSeeder {
  async run() {
    await Compra.createMany([
      {
        cod: "MGCMB0ATTG",
        valor_total: 59.99,
        data: "2021-03-10",
        funcionario_id: 1,
        cliente_id: 1,
      },
      {
        cod: "42VYR4W3EE",
        valor_total: 55.8,
        data: "2021-02-10",
        funcionario_id: 2,
        cliente_id: 2,
      },
      {
        cod: "TVPN4EQT3H",
        valor_total: 49.1,
        data: "2020-07-14",
        funcionario_id: 3,
        cliente_id: 3,
      },
      {
        cod: "R5QF6FLHVI",
        valor_total: 125.66,
        data: "2020-12-03",
        funcionario_id: 4,
        cliente_id: 4,
      },
      {
        cod: "R47TM1W0P8",
        valor_total: 47.44,
        data: "2020-12-22",
        funcionario_id: 5,
        cliente_id: 5,
      },
      {
        cod: "RIZ4B3BEDN",
        valor_total: 44.1,
        data: "2021-04-10",
        funcionario_id: 6,
        cliente_id: 6,
      },
      {
        cod: "Z8WQLLEA9H",
        valor_total: 90.2,
        data: "2021-04-27",
        funcionario_id: 7,
        cliente_id: 7,
      },
      {
        cod: "ELEY6CXJD7",
        valor_total: 105.25,
        data: "2020-12-21",
        funcionario_id: 8,
        cliente_id: 8,
      },
      {
        cod: "2VTXROR4K2",
        valor_total: 30.1,
        data: "2021-02-12",
        funcionario_id: 9,
        cliente_id: 9,
      },
      {
        cod: "ERGIO3JKUK",
        valor_total: 49.2,
        data: "2020-08-21",
        funcionario_id: 10,
        cliente_id: 10,
      },
      {
        cod: "LLQL0O126S",
        valor_total: 80.46,
        data: "2021-03-16",
        funcionario_id: 11,
        cliente_id: 11,
      },
      {
        cod: "62GGC2QWN1",
        valor_total: 71.63,
        data: "2020-10-26",
        funcionario_id: 12,
        cliente_id: 12,
      },
      {
        cod: "Q8GYL3F76D",
        valor_total: 55.36,
        data: "2020-10-27",
        funcionario_id: 13,
        cliente_id: 13,
      },
      {
        cod: "A1U9WRZ00V",
        valor_total: 25.3,
        data: "2020-11-22",
        funcionario_id: 14,
        cliente_id: 14,
      },
      {
        cod: "YRLV7F7UYS",
        valor_total: 20.0,
        data: "2021-04-10",
        funcionario_id: 15,
        cliente_id: 15,
      },
      {
        cod: "YRSR8K6YC2",
        valor_total: 66.1,
        data: "2020-11-08",
        funcionario_id: 1,
        cliente_id: 16,
      },
      {
        cod: "43JYWNHWIL",
        valor_total: 74.23,
        data: "2020-09-30",
        funcionario_id: 2,
        cliente_id: 17,
      },
      {
        cod: "2WZ8PBETME",
        valor_total: 66.2,
        data: "2020-05-30",
        funcionario_id: 3,
        cliente_id: 18,
      },
      {
        cod: "FOS8QLYX0R",
        valor_total: 65.1,
        data: "2021-04-23",
        funcionario_id: 4,
        cliente_id: 19,
      },
      {
        cod: "H5WK67V41D",
        valor_total: 23.33,
        data: "2021-03-26",
        funcionario_id: 5,
        cliente_id: 20,
      },
      {
        cod: "SQIE83OR49",
        valor_total: 20.1,
        data: "2020-11-13",
        funcionario_id: 6,
        cliente_id: 21,
      },
      {
        cod: "9RJJLGFD3Q",
        valor_total: 50.1,
        data: "2020-12-15",
        funcionario_id: 7,
        cliente_id: 22,
      },
      {
        cod: "4S9GXVT15P",
        valor_total: 40.23,
        data: "2020-10-30",
        funcionario_id: 8,
        cliente_id: 23,
      },
      {
        cod: "3DF7SQJ898",
        valor_total: 66.1,
        data: "2020-10-21",
        funcionario_id: 9,
        cliente_id: 24,
      },
      {
        cod: "3PJNCQ0U8D",
        valor_total: 88.1,
        data: "2021-02-02",
        funcionario_id: 10,
        cliente_id: 25,
      },
      {
        cod: "7W7R83T1TN",
        valor_total: 40.42,
        data: "2020-08-23",
        funcionario_id: 11,
        cliente_id: 26,
      },
      {
        cod: "G29KW9HXGJ",
        valor_total: 47.5,
        data: "2021-04-26",
        funcionario_id: 12,
        cliente_id: 27,
      },
      {
        cod: "4RQKHNWCTT",
        valor_total: 49.3,
        data: "2021-02-07",
        funcionario_id: 13,
        cliente_id: 28,
      },
      {
        cod: "5QLV82M1P9",
        valor_total: 47.4,
        data: "2020-08-20",
        funcionario_id: 14,
        cliente_id: 29,
      },
      {
        cod: "9DZCPB1U61",
        valor_total: 50.4,
        data: "2021-05-13",
        funcionario_id: 15,
        cliente_id: 30,
      },
    ]);
  }
}

module.exports = CompraSeeder;
