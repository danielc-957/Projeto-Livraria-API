"use strict";

const ValidatorAbstract = use("App/Validators/ValidatorAbstract");
class Cliente extends ValidatorAbstract {
  get rules() {
    return {
      nome: "required|max:50",
      cpf: "required|max:14",
      email: "email|required|max:70",
      telefone: "required|max:15",
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

module.exports = Cliente;
