import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';
import { Link, useLocation } from 'react-router-dom';
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonSuccess } from "../../styles/custom_adm";

export const Listar = () => {


    const { state } = useLocation();

    const [data, setData] = useState([])

    const [status] = useState({
        type: state ? state.type : "",
        mensagem: state ? state.mensagem : "",
    })

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
    }, []);

    const apagarProduto = async (idProduto) => {
        console.log(idProduto);
    }

    return (
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Listar</Titulo>
                <BotaoAcao>
                    <Link to="/cadastrar"><ButtonSuccess type="button">Cadastrar</ButtonSuccess></Link>
                </BotaoAcao>
            </ConteudoTitulo>

            {status.type === "success" ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}

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
                                    <Link to={"#"}><button onClick={() => apagarProduto(produto.id)}>Apagar</button></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    );
}