import React from "react";
import './Nav-item.css'
import { Link } from 'react-router-dom'

export default function NavItem(props) {
    return (        
        <Link to={`/${props.href ? props.href : ''}`}>
            <i className={`fa fa-${props.faType}`}></i> {props.name}
        </Link>
    )
}