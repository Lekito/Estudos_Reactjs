import React, { useState } from 'react';
import { Menu } from '../../Components/Menu';
import { Link, useNavigate } from "react-router-dom";
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonSuccess, ButtonInfo, Form, Label, Input, Hr, AlertDanger, AlertSuccess } from "../../styles/custom_adm";
import api from '../../config/configApi';

export const Cadastrar = () => {

    const navigate = useNavigate();

    const [produto, setProduto] = useState({
        nome: '',
        preco_compra: '',
        preco_venda: '',
        quantidade: ''
    });

    const [valorPrecoCompraTarget, setValorPrecoCompraTarget] = useState();

    const [valorPrecoVendaTarget, setValorPrecoVendaTarget] = useState();

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valueInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });

    const addProduto = async event => {
        event.preventDefault();

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        await api.post("/cad-produto", produto, headers)
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
            });
    };

    const valuePrecoCompra = async e => {
        var valorPrecoCompraInput = e.target.value;

        valorPrecoCompraInput = valorPrecoCompraInput.replace(/\D/g, "");
        valorPrecoCompraInput = valorPrecoCompraInput.replace(/(\d)(\d{2})$/, "$1,$2");
        valorPrecoCompraInput = valorPrecoCompraInput.replace(/(?=(\d{3})+(\D))\B/g, ".");

        setValorPrecoCompraTarget(valorPrecoCompraInput);

        var precoCompraSalvar = await valorPrecoCompraInput.replace(".", "");
        precoCompraSalvar = await precoCompraSalvar.replace(",", ".");

        setProduto({ ...produto, preco_compra: precoCompraSalvar });

    }

    const valuePrecoVenda = async e => {
        var valorPrecoVendaInput = e.target.value;

        valorPrecoVendaInput = valorPrecoVendaInput.replace(/\D/g, "");
        valorPrecoVendaInput = valorPrecoVendaInput.replace(/(\d)(\d{2})$/, "$1,$2");
        valorPrecoVendaInput = valorPrecoVendaInput.replace(/(?=(\d{3})+(\D))\B/g, ".");

        setValorPrecoVendaTarget(valorPrecoVendaInput);

        var precoVendaSalvar = await valorPrecoVendaInput.replace(".", "");
        precoVendaSalvar = await precoVendaSalvar.replace(",", ".");

        setProduto({ ...produto, preco_venda: precoVendaSalvar });
    }

    return (
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Visualizar</Titulo>
                <BotaoAcao>
                    <Link to="/listar"><ButtonInfo type="button">Listar</ButtonInfo></Link>
                </BotaoAcao>
            </ConteudoTitulo>

            <Hr />

            {status.type === 'error' ? <AlertDanger>{status.mensagem}</AlertDanger> : ""}
            {status.type === 'success' ? <AlertSuccess>{status.mensagem}</AlertSuccess> : ""}
            {status.type === 'redSuccess' ? navigate("/listar", {
                state:
                {
                    type: "success",
                    mensagem: status.mensagem
                }
            }) : ""}

            <Form onSubmit={addProduto}>
                <Label>Nome: </Label>
                <Input type="text" name="nome" placeholder="Nome do produto" onChange={valueInput}></Input>

                <Label>Preço de Compra: </Label>
                <Input type="float" name="valorPrecoCompraTarget" placeholder="Preço de compra" value={valorPrecoCompraTarget} onChange={valuePrecoCompra}></Input>

                <Label>Preço de Venda: </Label>
                <Input type="float" name="valorPrecoVendaTarget" placeholder="Preço de venda" value={valorPrecoVendaTarget} onChange={valuePrecoVenda}></Input>

                <Label>Quatidade: </Label>
                <Input type="number" name="quantidade" placeholder="Quantidade do produto" onChange={valueInput}></Input>

                <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
            </Form>
        </Container>
    );
}