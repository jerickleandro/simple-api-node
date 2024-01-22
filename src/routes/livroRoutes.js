import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get("/livros", LivroController.litarLivros);
routes.post("/livros", LivroController.criaLivro)

export default routes;