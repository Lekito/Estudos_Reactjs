import React, { useEffect, useState } from 'react';
import { Menu } from '../../Components/Menu';
import { useParams } from 'react-router-dom';

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
        <>
            <Menu />
            <h1>Editar</h1>

            <form onSubmit={editProduto}>
                <label>Nome: </label>
                <input type="text" name="nome" placeholder="Nome do produto" value={nome} onChange={e => setNome(e.target.value)}></input>
                <br />
                <br />

                <label>Valor: </label>
                <input type="float" name="valor" placeholder="Valor do produto" value={valor} onChange={e => setValor(e.target.value)}></input>
                <br />
                <br />

                <label>Quatidade: </label>
                <input type="number" name="quantidade" placeholder="Quantidade do produto" value={quantidade} onChange={e => setQuantidade(e.target.value)}></input>
                <br />
                <br />

                <button type="submit">Salvar</button>
            </form>
        </>
    );
}