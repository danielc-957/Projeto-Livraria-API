"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
Route.group(() => {
  Route.resource("/autores", "AutorController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Autor"]]));

  Route.resource("/autoresLivros", "AutorLivroController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "AutorLivro"]]));

  Route.resource("/categorias", "CategoriaController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Categoria"]]));

  Route.resource("/clientes", "ClienteController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Cliente"]]));

  Route.resource("/compras", "CompraController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Compra"]]));

  Route.resource("/editoras", "EditoraController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Editora"]]));

  Route.resource("/funcionarios", "FuncionarioController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Funcionario"]]));

  Route.resource("/livrosCategorias", "LivroCategoriaController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "LivroCategoria"]]));

  Route.resource("/livrosCompras", "LivroCompraController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "LivroCompra"]]));

  Route.resource("/livros", "LivroController")
    .apiOnly()
    .validator(new Map([[["store", "update"], "Livro"]]));
}).middleware("auth");

Route.resource("/users", "UserController").apiOnly();
Route.post("/token", "UserController.token");
