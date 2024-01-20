import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';
import { Link } from 'react-router-dom';

export const Listar = () => {

    const [data, setData] = useState([])

    const listarProdutos = async => {
        var valores = [
            {
                "id": 3,
                "nome": "Monitor",
                "valor": 820.61,
                "quantidade": 15,
            },
            {
                "id": 2,
                "nome": "Teclado",
                "valor": 120.47,
                "quantidade": 25,
            },
            {
                "id": 1,
                "nome": "Mouse",
                "valor": 52.47,
                "quantidade": 43,
            }
        ]
        setData(valores);
    }

    useEffect(() => {
        listarProdutos();
    }, [])
    return (
        <>
            <Menu />
            <h1>Listar</h1>

            <Link to="/cadastrar"><button type="button">Cadastrar</button></Link>
            <hr />
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Valor</td>
                        <td>Quantidade</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.valor}</td>
                                <td>{produto.quantidade}</td>
                                <td>
                                    <Link to={"/visualizar/" + produto.id}><button type="button">Visualizar</button></Link>
                                    <Link to={"/editar/" + produto.id}><button type="button">Editar</button></Link>
                                    Apagar</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </>
    );
}