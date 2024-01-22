import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";


const conexao = await connectDatabase();
conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com Banco feito com sucesso");
})

const app = express();
routes(app);


app.put("/livros/:id", (req, res) => {
    const { id } = req.params;
    const updateBook = req.body;
    const indice = buscaIndiceLivroPorId(id);
    livros[indice] = updateBook;
    res.status(200).json({ mensagem: "Livro editado com Sucesso!" });
})

app.delete("/livros/:id", (req, res) => {
    const { id } = req.params;
    const indice = buscaIndiceLivroPorId(id);
    if (indice !== -1) {
        array.splice(indice, 1);
        res.status(200).json({ mensagem: "Livro deletado com Sucesso!" });
    }
    res.status(404).json({ mensagem: "Não foi encontrado livro com esse id" });
});
export default app;