"use strict";

class ValidatorAbstract {
  get validateAll() {
    return true;
  }

  get messages() {
    return {
      required: "O campo '{{ field }}' é obrigatório",
      max: "O campo '{{ field }}' ultrapassou o valor máximo",
      min: "O campo '{{ field }}' não atingiu o valor mínimo",
      integer: "O campo '{{ field }}' deve ser inteiro",
      email: "O campo '{{ field }}' deve ser um email válido",
      number: "O campo '{{ field }}' deve ser um numero válido",
      string: "O campo '{{ field }}' deve ser uma String",
      date:
        "O campo '{{ field }}' deve ser uma data válida (Formato data iso: YYYY-MM-DD)",
    };
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send(errorMessages);
  }
}

module.exports = ValidatorAbstract;
