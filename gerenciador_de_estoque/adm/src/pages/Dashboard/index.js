import React from 'react';
import { Menu } from '../../Components/Menu';
import { Container, ConteudoTitulo, Titulo } from "../../styles/custom_adm";

export const Dashboard = () => {
    return (
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>
                    Bem vindo - Dashboard
                </Titulo>
            </ConteudoTitulo>

        </Container>
    );
}