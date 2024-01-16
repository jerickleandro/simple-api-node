import express from "express";

const app = express();
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Aneis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("API Node Simples para Exemplos");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).json({ mensagem: "Livro cadastrado com Sucesso!" });
})

app.put("/livros/:id", (req, res) => {
    const { id } = req.params;
    const updateBook = req.body;
    const indice = livros.findIndex(obj => Number(obj.id) === Number(id));
    livros[indice] = updateBook;
    res.status(200).json({ mensagem: "Livro editado com Sucesso!" });
})

app.delete("/livros/:id", (req, res) => {
    const { id } = req.params;
    const indice = livros.findIndex(obj = Number(obj.id) === Number(id));
    if (indice !== -1) {
        array.splice(indice, 1);
        res.status(200).json({ mensagem: "Livro deletado com Sucesso!" });
    }
    res.status(404).json({ mensagem: "Não foi encontrado livro com esse id" });
});
export default app;