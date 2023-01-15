import './Logo.css'
import React from 'react'
import logo from '../../assets/imgs/gryffindor.png'

export default function Logo(props) {
    return (
        <aside className="logo">
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>
        </aside>
    )
}