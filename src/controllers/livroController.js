import { autor } from "../models/autor.js";
import livro from "../models/livros.js";

class LivroController {
  static async litarLivros(req, res) {

    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }

  }

  static async litarLivro(req, res) {

    try {
      const { id } = req.params;
      const livroEncontrado = await livro.findById(id);
      if (livroEncontrado) {
        res.status(200).json(livroEncontrado);
      }
      res.status(404);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

  }

  static async criaLivro(req, res) {
    try {

      const novoLivro = req.body;
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroInserido = await livro.create(livroCompleto);
      res.status(201).json({ message: "Livro criado com sucesso!", data: livroInserido });

    } catch (error) {
      res.status(500).json({ message: error.message });
    }

  }

  static async atualizarLivro(req, res) {

    try {
      const { id } = req.params;
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro Atualizado!" });

    } catch (error) {
      res.status(500).json({ message: error.message });
    }

  }

  static async deletaLivro(req, res) {
    try {
      const { id } = req.params;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro Deletado!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
}

export default LivroController;
