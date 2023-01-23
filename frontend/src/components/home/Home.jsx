import React from "react";
import Main from "../template/Main";

export default function Home() {
    const headerProps = {
        icon: 'home',
        title: 'Início',
        subtitle: 'Cadastro de usuário'
    }

    return (
        <Main {...headerProps}>
            <div className="display-4">Bem vindo</div>
            <hr />
            <p className="mb-0">Sistema Cadastro de Usuário</p>
        </Main>
    )
}