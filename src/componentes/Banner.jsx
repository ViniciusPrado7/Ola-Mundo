import React from 'react'
import styles from '../styles/Banner.module.css'
import circuloColorido from '../assets/circulo_colorido.png'
import minhaFoto from '../assets/minha_foto.png'

function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quisquam, animi excepturi vitae beatae numquam libero ipsum expedita mollitia nostrum tempore dolores natus optio, eum itaque modi incidunt alias fugiat?
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="imagem  circulo"
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do antonio sorrindo"
                />
            </div>
        </div>
    )
}

export default Banner