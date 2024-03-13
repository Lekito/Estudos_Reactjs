import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';
import { Link, useParams } from 'react-router-dom';
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonWarning, ButtonInfo, ConttentView, Hr } from "../../styles/custom_adm";

import api from '../../config/configApi';

export const Visualizar = () => {

    const { id } = useParams();
    console.log(id);

    const [data, setData] = useState("");
    const [status, setStatus] = useState({
        type: "",
        mensagem: ""
    });

    useEffect(() => {
        const getProduto = async () => {

            await api.get("/view-produto/" + id)
                .then((response) => {
                    setData(response.data.produto);
                }).catch((err) => {
                    if (err.response) {
                        setStatus({
                            type: "error",
                            mensagem: err.response.data.message
                        });
                    } else {
                        setStatus({
                            type: "error",
                            mensagem: "Erro: Tente mais tarde!"
                        });
                    }
                });
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

            <Hr />

            <ConttentView>ID:{data.id}</ConttentView>
            <ConttentView>Nome: {data.nome}</ConttentView>
            <ConttentView>Preço de Compra: R$ {data.preco_compra}</ConttentView>
            <ConttentView>Preço de Venda: R$ {data.preco_venda}</ConttentView>
            <ConttentView>Quantidade: {data.quantidade}</ConttentView>
        </Container>
    );
}