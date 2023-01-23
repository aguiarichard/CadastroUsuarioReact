import './Nav.css'
import React from 'react'
import NavItem from './Nav-item'

export default function Nav(props) {
    return (
        <aside className="menu-area">
            <nav className='menu'>
                <NavItem faType="home" name="Início"/>
                <NavItem href="users" faType="users" name="Usuários"/>
            </nav>
        </aside>
    )
}