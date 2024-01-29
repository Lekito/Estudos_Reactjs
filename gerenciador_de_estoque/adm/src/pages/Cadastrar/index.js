import React, { useState } from 'react';
import { Menu } from '../../Components/Menu';
import { Link, useNavigate } from "react-router-dom";
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonSuccess, ButtonInfo, Form, Label, Input, Hr } from "../../styles/custom_adm";

export const Cadastrar = () => {

    const navigate = useNavigate();

    const [produto, setProduto] = useState({
        nome: '',
        valor: '',
        quantidade: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valueInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });

    const addProduto = async event => {
        event.preventDefault();
        console.log("Quatidade: " + produto.quantidade);
        setStatus({
            type: 'error',
            mensagem: 'Erro: Produto não cadastrado com sucesso!'
        });
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

            {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
            {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
            {status.type === 'redSuccess' ? navigate("/listar", {
                state:
                {
                    type: "success",
                    mensagem: "Produto cadastrado com sucesso!"
                }
            }) : ""}

            <Form onSubmit={addProduto}>
                <Label>Nome: </Label>
                <Input type="text" name="nome" placeholder="Nome do produto" onChange={valueInput}></Input>

                <Label>Valor: </Label>
                <Input type="float" name="valor" placeholder="Valor do produto" onChange={valueInput}></Input>

                <Label>Quatidade: </Label>
                <Input type="number" name="quantidade" placeholder="Quantidade do produto" onChange={valueInput}></Input>

                <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
            </Form>
        </Container>
    );
}