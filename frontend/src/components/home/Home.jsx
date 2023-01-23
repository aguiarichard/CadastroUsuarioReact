import React from "react";
import Main from "../template/Main";

export default function Home() {
    return (
        <Main icon="home" title="Início"
            subtitle="Cadastro de usúario">
            <div className="display-4">Bem vindo</div>
            <hr />
            <p className="mb-0">Sistema Cadastro de Usuário</p>
        </Main>
    )
}