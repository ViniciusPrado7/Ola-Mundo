import React from 'react'
import styles from '../styles/Rodape.module.css'
import marcaRegistrada from '../assets/marca_registrada.svg';

function Rodape() {
  return (
    <footer className={styles.rodape}>
        <img src={marcaRegistrada} alt="Marca registrada" />
        Desenvolvido por Alura
    </footer>
  );
}


export default Rodape