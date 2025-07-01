import React from 'react'
import styles from '../styles/MenuLink.module.css';
import { Link, useLocation } from 'react-router-dom';

function MenuLink({children, to}) {

    const localizacao = useLocation();

    return (
        <Link to={to} className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
            `}>
            {children}
        </Link>
    )
}

export default MenuLink