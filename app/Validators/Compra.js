"use strict";

const ValidatorAbstract = use("App/Validators/ValidatorAbstract");
class Compra extends ValidatorAbstract {
  get rules() {
    return {
      cod: "required|max:20",
      valor_total: "number|required",
      data: "date|required",
      funcionario_id: "integer|required",
      cliente_id: "integer|required",
    };
  }
}

module.exports = Compra;
