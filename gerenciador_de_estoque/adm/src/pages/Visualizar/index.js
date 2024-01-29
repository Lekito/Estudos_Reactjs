import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';
import { Link, useParams } from 'react-router-dom';
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonWarning, ButtonInfo, ConttentView } from "../../styles/custom_adm";

export const Visualizar = () => {

    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState("");

    useEffect(() => {
        const getProduto = async () => {
            setData({
                id: 1,
                nome: "Mouse",
                valor: 52.47,
                quantidade: 43
            })
        }
        getProduto();
    }, [id]);

    return (
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Visualizar</Titulo>
                <BotaoAcao>
                    <Link to="/listar"><ButtonInfo type="button">Listar</ButtonInfo></Link>
                    <Link to={"/editar/" + id}><ButtonWarning type="button">Editar</ButtonWarning></Link>
                </BotaoAcao>
            </ConteudoTitulo>

            <hr />

            <ConttentView>Selecionado: {id}</ConttentView>
            <ConttentView>ID:{data.id}</ConttentView>
            <ConttentView>Nome: {data.nome}</ConttentView>
            <ConttentView>Valor: {data.valor}</ConttentView>
            <ConttentView>Quantidade: {data.quantidade}</ConttentView>
        </Container>
    );
}