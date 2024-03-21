import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonInfo, Form, Label, Input, Hr, ButtonPrimary, ButtonWarning, AlertDanger, AlertSuccess } from "../../styles/custom_adm";

import api from '../../config/configApi';

export const Editar = () => {

    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [preco_compra, setPreco_compra] = useState("");
    const [preco_venda, setPreco_venda] = useState("");
    const [quantidade, setQuantidade] = useState("");

    const [valorPrecoCompraTarget, setValorPrecoCompraTarget] = useState();

    const [valorPrecoVendaTarget, setValorPrecoVendaTarget] = useState();

    const [status, setStatus] = useState({
        type: "",
        mensagem: ""
    });

    const navigate = useNavigate();

    const editProduto = async e => {
        e.preventDefault();

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        await api.put("/edit-produto", { id, nome, preco_compra, preco_venda, quantidade }, headers)
            .then((response) => {
                setStatus({
                    type: 'redSuccess',
                    mensagem: response.data.mensagem
                });
            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.mensagem
                    });
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro: Tente mais tarde!"
                    });
                }
            })
    }

    useEffect(() => {
        const getProduto = async () => {
            await api.get("/view-produto/" + id)
                .then((response) => {
                    //setData(response.data.produto);
                    setNome(response.data.produto.nome);

                    setPreco_compra(response.data.produto.preco_compra);
                    setValorPrecoCompraTarget(new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency: 'BRL' }).format(response.data.produto.preco_compra));

                    setPreco_venda(response.data.produto.preco_venda);
                    setValorPrecoVendaTarget(new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, currency: 'BRL' }).format(response.data.produto.preco_venda));

                    setQuantidade(response.data.produto.quantidade);
                }).catch((err) => {
                    if (err.response) {
                        setStatus({
                            type: "redErro",
                            mensagem: err.response.data.message
                        });
                    } else {
                        setStatus({
                            type: "redErro",
                            mensagem: "Erro: Tente mais tarde!"
                        });
                    }
                });
        }
        getProduto();
    }, [id]);


    const valuePrecoCompra = async (valorPrecoCompraInput) => {

        var valorPrecoCompraConvert = valorPrecoCompraInput.toString().replace(/\D/g, "");
        valorPrecoCompraConvert = valorPrecoCompraConvert.replace(/(\d)(\d{2})$/, "$1,$2");
        valorPrecoCompraConvert = valorPrecoCompraConvert.replace(/(?=(\d{3})+(\D))\B/g, ".");

        setValorPrecoCompraTarget(valorPrecoCompraConvert);

        var precoCompraSalvar = await valorPrecoCompraConvert.replace(".", "");
        precoCompraSalvar = await precoCompraSalvar.replace(",", ".");

        setPreco_compra(precoCompraSalvar);
    }

    const valuePrecoVenda = async (valorPrecoVendaInput) => {

        var valorPrecoVendaConvert = valorPrecoVendaInput.toString().replace(/\D/g, "");
        valorPrecoVendaConvert = valorPrecoVendaConvert.replace(/(\d)(\d{2})$/, "$1,$2");
        valorPrecoVendaConvert = valorPrecoVendaConvert.replace(/(?=(\d{3})+(\D))\B/g, ".");

        setValorPrecoVendaTarget(valorPrecoVendaConvert);

        var precoVendaSalvar = await valorPrecoVendaConvert.replace(".", "");
        precoVendaSalvar = await precoVendaSalvar.replace(",", ".");

        setPreco_venda(precoVendaSalvar);
    }


    return (
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Editar</Titulo>
                <BotaoAcao>
                    <Link to="/listar"><ButtonInfo type="button">Listar</ButtonInfo></Link>
                    <Link to={"/visualizar/" + id}><ButtonPrimary type="button">Visualizar</ButtonPrimary></Link>
                </BotaoAcao>
            </ConteudoTitulo>

            {status.type === 'error' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
            {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
            {status.type === 'redSuccess' ? navigate("/listar", {
                state:
                {
                    type: "success",
                    mensagem: status.mensagem
                }
            }) : ""}

            <Hr />

            <Form onSubmit={editProduto}>
                <Label>Nome: </Label>
                <Input type="text" name="nome" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)}></Input>

                <Label>Preço de Compra: </Label>
                <Input type="float" name="valorPrecoCompraTarget" placeholder="Preço de compra" value={valorPrecoCompraTarget} onChange={e => valuePrecoCompra(e.target.value)}></Input>

                <Label>Preço de Venda: </Label>
                <Input type="float" name="valorPrecoVendaTarget" placeholder="Preço de venda" value={valorPrecoVendaTarget} onChange={e => valuePrecoVenda(e.target.value)}></Input>

                <Label>Quatidade: </Label>
                <Input type="number" name="quantidade" placeholder="Quantidade do produto" value={quantidade} onChange={e => setQuantidade(e.target.value)}></Input>

                <ButtonWarning type="submit">Salvar</ButtonWarning>
            </Form>
        </Container>
    );
}