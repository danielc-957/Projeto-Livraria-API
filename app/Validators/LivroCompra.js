"use strict";

const ValidatorAbstract = use("App/Validators/ValidatorAbstract");

class LivroCompra extends ValidatorAbstract {
  get rules() {
    return {
      livro_id: "integer|required",
      compra_id: "integer|required",
    };
  }
}

module.exports = LivroCompra;
