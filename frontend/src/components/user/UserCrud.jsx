import React, { Component } from "react";
import Main from "../template/Main";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Criar, ler, adicionar e deletar'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Conteúdo.
            </Main>
        )
    }
}