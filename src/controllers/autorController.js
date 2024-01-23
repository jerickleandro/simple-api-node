import { autor } from "../models/autor.js";

class AutorController {
    static async listarAutores(req, res) {

        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores)

        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    static async listarAutor(req, res) {

        try {
            const { id } = req.params;
            const autorEncontrado = await autor.findById(id);
            if (autorEncontrado) {
                res.status(200).json(autorEncontrado)
            }
            res.status(404);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    static async criaAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor criado com sucesso!", data: novoAutor });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    static async atualizarAutor(req, res) {

        try {
            const { id } = req.params;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor Atualizado!" });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    }

    static async deletaAutor(req, res) {
        try {
            const { id } = req.params;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor Deletado!" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default AutorController;
