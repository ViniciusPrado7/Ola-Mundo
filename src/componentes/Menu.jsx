import React from 'react'
import styles from '../styles/Menu.module.css';
import { Link, useLocation } from 'react-router-dom';
import MenuLink from './MenuLink';

function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu