import express from "express";
import livros from "./livroRoutes.js";
import autor from "./autorRoutes.js";

const routes = (app) => {
  // Rota Geral
  app.route("/").get((req, res) => res.status(200).sent("API NodeJs"));
  // Rotas de Livro
  app.use(express.json(), livros, autor);
};

export default routes;