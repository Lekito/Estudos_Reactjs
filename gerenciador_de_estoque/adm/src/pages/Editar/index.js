import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';
import { Link, useParams } from 'react-router-dom';
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonInfo, Form, Label, Input, Hr, ButtonPrimary, ButtonWarning } from "../../styles/custom_adm";

export const Editar = () => {

    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [quantidade, setQuantidade] = useState("");

    const editProduto = async e => {
        e.preventDefault();
        console.log("Nome: " + nome);
        console.log("Valor: " + valor);
        console.log("Quantidade: " + quantidade);
        alert("Nome: " + nome);
    }

    useEffect(() => {
        const getProduto = async () => {
            setNome("Mouse");
            setValor(52.47);
            setQuantidade(43);
        }
        getProduto();
    }, [id]);

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

            <Hr />

            <Form onSubmit={editProduto}>
                <Label>Nome: </Label>
                <Input type="text" name="nome" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)}></Input>

                <Label>Valor: </Label>
                <Input type="float" name="valor" placeholder="Valor do produto" value={valor} onChange={e => setValor(e.target.value)}></Input>

                <Label>Quatidade: </Label>
                <Input type="number" name="quantidade" placeholder="Quantidade do produto" value={quantidade} onChange={e => setQuantidade(e.target.value)}></Input>

                <ButtonWarning type="submit">Salvar</ButtonWarning>
            </Form>
        </Container>
    );
}