import React, { useState } from 'react';
import { Menu } from '../../Components/Menu';

export const Cadastrar = () => {

    const [produto, setProduto] = useState({
        nome: '',
        valor: '',
        quantidade: ''
    });

    const valueInput = e => setProduto({ ...produto, [e.target.name]: e.target.value });

    const addProduto = async event => {
        event.preventDefault();
        console.log("Quatidade: " + produto.quantidade)
    }

    return (
        <>
            <Menu />
            <h1>Cadastrar</h1>

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