import { Route, Routes, useParams } from 'react-router-dom'
import posts from "../json/posts.json"
import PostModelo from '../componentes/PostModelo';
import ReactMarkDown from "react-markdown";
import "../styles/Post.css";
import NaoEncontrada from '../pages/NaoEncontrada'
import PaginaPadrao from '../componentes/PaginaPadrao';
import PostCard from '../componentes/PostCard';

function Post() {

  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />
  }

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
          >
            <div className='post-markdown-container'>
              <ReactMarkDown>
                {post.texto}
              </ReactMarkDown>
            </div>
            <div>
              <h2>Outros posts que você pode gostar:</h2>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {
                  posts
                    .filter(p => p.id !== post.id)   // exclui o post atual
                    .slice(0, 4)                     // pega os 4 primeiros
                    .map(p => (
                      <PostCard key={p.id} post={p} />
                    ))
                }
              </div>
            </div>

          </PostModelo>
        } />
      </Route>
    </Routes>

  )
}

export default Post