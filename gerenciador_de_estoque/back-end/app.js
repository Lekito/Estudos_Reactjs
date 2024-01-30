const express = require('express');
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    res.send('Hello world! \n\n Hi, Alex! Good job!');
});

app.post("/cad-produto", async (req, res) => {
    console.log(req.body);
    res.send('Cadastrar produto!');
});



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});