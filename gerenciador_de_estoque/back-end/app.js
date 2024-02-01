const express = require('express');
const app = express();

const Produto = require('./models/Produtos');

app.use(express.json());

app.get("/view-produto/:id", async (req, res) => {
    const { id } = req.params;
    await Produto.findByPk(id)
        .then((produto) => {
            return res.json({
                erro: false,
                produto
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                message: "Erro: Nenhum produto encontrado!"
            })
        });
});

app.get("/list-produto", async (req, res) => {
    await Produto.findAll({
        attributes: ['id', 'nome', 'preco_venda', 'quantidade'],
        order: [['id', 'DESC']]
    })
        .then((produtos) => {
            return res.json({
                erro: false,
                produtos: produtos
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                message: "Erro: Nenhum produto encontrado!"
            })
        });
});

app.post("/cad-produto", async (req, res) => {
    await Produto.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Produto cadastrado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Produto não cadastrado com sucesso!"
            });
        });
});



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});