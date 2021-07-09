"use strict";

const ValidatorAbstract = use("App/Validators/ValidatorAbstract");

class Funcionario extends ValidatorAbstract {
  get rules() {
    return {
      nome: "required|max:50",
      salario: "number|required",
      cep: "min:8|max:8",
      logradouro: "max:100",
      numero_lote: "integer",
      complemento: "max:45",
      cidade: "min:3|max:20",
      bairro: "max:100",
      uf: "min:2|max:2",
    };
  }
}

module.exports = Funcionario;
