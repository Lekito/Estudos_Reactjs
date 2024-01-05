import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';

export const Visualizar = () => {
    const [id, setId] = useState("");
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
    }, [id])

    return (
        <>
            <Menu />
            <h1>Visualizar</h1>
            <span>{data.id}</span><br />

        </>
    );
}