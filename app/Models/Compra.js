"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Compra extends Model {
  static getCamposCadastro() {
    return ["cod", "valor_total", "data", "funcionario_id", "cliente_id"];
  }

  funcionario() {
    return this.belongsTo("App/Models/Funcionario");
  }

  cliente() {
    return this.belongsTo("App/Models/Cliente");
  }

  livros() {
    return this.belongsToMany("App/Models/Livro").pivotTable("livro_compras");
  }
}

module.exports = Compra;
