import React, { useState } from 'react';
import { Menu } from '../../Components/Menu';
import { useNavigate } from "react-router-dom";


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
        <>
            <Menu />
            <h1>Cadastrar</h1>

            {status.type === 'error' ? <p style={{ color: "#ff0000" }}>{status.mensagem}</p> : ""}
            {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
            {status.type === 'redSuccess' ? navigate("/listar", {
                state:
                {
                    type: "success",
                    mensagem: "Produto cadastrado com sucesso!"
                }
            }) : ""}

            <form onSubmit={addProduto}>
                <label>Nome: </label>
                <input type="text" name="nome" placeholder="Nome do produto" onChange={valueInput}></input>
                <br />
                <br />

                <label>Valor: </label>
                <input type="float" name="valor" placeholder="Valor do produto" onChange={valueInput}></input>
                <br />
                <br />

                <label>Quatidade: </label>
                <input type="number" name="quantidade" placeholder="Quantidade do produto" onChange={valueInput}></input>
                <br />
                <br />

                <button type="submit">Cadastrar</button>
            </form>
        </>
    );
}