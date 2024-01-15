import http from "http";
const PORT = 3000;

const rotas = {
    "/": "Simple API Node!",
    "/livros": "Entrando na rota livros",
    "/autores": "Entrando na rota autores"
}
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content.Type": "text/plain"
    });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Server listening");
});