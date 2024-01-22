import livro from "../models/livros.js";

class LivroController {
    static async litarLivros(req, res) {

        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros)

        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    static async litarLivro(req, res) {

        try {
            const { id } = req.params;
            const livroEncontrado = await livro.findById(id);
            if (livroEncontrado) {
                res.status(200).json(livroEncontrado)
            }
            res.status(404);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    static async criaLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Livro criado com sucesso!", data: novoLivro });

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
}

export default LivroController;
