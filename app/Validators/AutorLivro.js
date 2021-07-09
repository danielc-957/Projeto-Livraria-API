"use strict";

const ValidatorAbstract = use("App/Validators/ValidatorAbstract");
class AutorLivro extends ValidatorAbstract {
  get rules() {
    return {
      autor_id: "integer|required",
      livro_id: "integer|required",
    };
  }
}

module.exports = AutorLivro;
