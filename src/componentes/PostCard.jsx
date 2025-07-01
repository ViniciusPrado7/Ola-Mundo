import React from 'react'
import styles from '../styles/Post.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from './BotaoPrincipal'

function PostCard({post}) {
  return (
  <Link to={`/posts/${post.id}`} onClick={() => window.scrollTo(0, 0)}>
       <div className={styles.post}>
        <img className={styles.capa} 
        src={`/assets/posts/${post.id}/capa.png`} 
        alt="Imagem de capa do post" 
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
    </div>
    </Link>
   
  )
}

export default PostCard