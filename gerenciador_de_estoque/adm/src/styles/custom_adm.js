import styled from "styled-components";

export const Container = styled.section`
    margin: 0px auto;
    width: 960px;
    max-width: 960px;
`;

export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Titulo = styled.h1`
    font-size: 23px;
    font-family: sans-serif;
    margin: 10px 15px;
    color: #1d1e1e;
`;

export const BotaoAcao = styled.section`
    margin: 5px;
`;

export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 5px 8px;
    border: 1px solid;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #198754;
        color: #fff;
    }
`;