import styles from '../styles/Inicio.module.css'
import posts from '../json/posts.json'
import Post from '../componentes/PostCard'

function Inicio() {
  return (

      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post}/>
          </li>
        ))}
      </ul>
    
  )
}

export default Inicio