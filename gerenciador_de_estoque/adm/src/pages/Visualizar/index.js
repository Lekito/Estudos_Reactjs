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
    }, []);

    return (
        <>
            <Menu />
            <h1>Visualizar</h1>
            <span>{id}</span><br />

        </>
    );
}