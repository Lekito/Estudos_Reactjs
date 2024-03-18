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
            })

        //console.log("Quatidade: " + produto.quantidade);

        /*
        setStatus({
            type: 'error',
            mensagem: 'Erro: Produto não cadastrado com sucesso!'
        });
        */
        /*
        setStatus({
            type: 'success',
            mensagem: 'Produto cadastrado com sucesso!'
        });
        */
        /*setStatus({
            type: 'redSuccess',
            mensagem: 'Produto cadastrado com sucesso!'
        });*/

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
                <Input type="float" name="preco_compra" placeholder="Preço de compra" onChange={valueInput}></Input>
                <Label>Preço de Venda: </Label>
                <Input type="float" name="preco_venda" placeholder="Preço de venda" onChange={valueInput}></Input>

                <Label>Quatidade: </Label>
                <Input type="number" name="quantidade" placeholder="Quantidade do produto" onChange={valueInput}></Input>

                <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
            </Form>
        </Container>
    );
}