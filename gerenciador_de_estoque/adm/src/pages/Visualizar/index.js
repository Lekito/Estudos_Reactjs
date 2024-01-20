import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';
import { useParams } from 'react-router-dom';

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
        <>
            <Menu />
            <h1>Visualizar</h1>
            <span>Selecionado: {id}</span><br />
            <span>ID:{data.id}</span><br />
            <span>Nome: {data.nome}</span><br />
            <span>Valor: {data.valor}</span><br />
            <span>Quantidade: {data.quantidade}</span><br />
        </>
    );
}