import styled from "styled-components";

export const NavList = styled.ul`
    display: flex; // tudo em uma unica linha
    background-color: #0d6efd;
    padding: 15px 5px;
    font-family: sans-serif;
    margin-bottom: 15px;
    a{
        text-decoration: none;
        color: #f9f9f9;
        margin: 0 8px;
    }
    a:hover{
        color:#d0d2db;
    }
    li{
        margin: 0 1px;
        font-size: 1.5rem;
        list-style: none;
    }
`;