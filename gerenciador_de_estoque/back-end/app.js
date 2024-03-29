const express = require('express');
const cors = require('cors');
const app = express();

const Produto = require('./models/Produtos');

app.use(express.json());

app.use((req, res, next) => { // isso é Middleware(é execultado antes de qualquer rota)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", ['GET', 'PUT', 'POST', 'DELETE']);
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next(); // caso não tenha nenhum erro continue.
});

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

app.put('/edit-produto', async (req, res) => {
    const { id } = req.body;
    await Produto.update(req.body, { where: { id } })
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Produto editado com sucesso!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Produto não editado com sucesso!"
            });
        });
});

app.delete('/delete-produto/:id', async (req, res) => {
    const { id } = req.params;
    await Produto.destroy({
        where: { id }
    }).then(() => {
        return res.json({
            erro: false,
            mensagem: "Produto apagado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Produto não apagado com sucesso!"
        });
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});