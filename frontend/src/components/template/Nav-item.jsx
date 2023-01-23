import React from "react";

export default function NavItem(props) {
    return (        
        <a href={`#/${props.href ? props.href : ''}`}>
            <i className={`fa fa-${props.faType}`}></i> {props.name}
        </a>
    )
}