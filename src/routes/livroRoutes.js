import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get("/livros", LivroController.litarLivros);
routes.get("/livros/:id", LivroController.litarLivro);
routes.post("/livros", LivroController.criaLivro)
routes.put("/livros/:id", LivroController.atualizarLivro);

export default routes;