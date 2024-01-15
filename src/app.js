import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("API Node Simples para Exemplos");
});

export default app;