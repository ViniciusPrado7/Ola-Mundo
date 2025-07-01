import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from "./pages/Post";
import NaoEncontrada from "./pages/NaoEncontrada";

// console.log(window.location)

// const pagina = window.location.pathname === '/' ? <Inicio /> : <Sobremim />

function AppRoutes() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>
        <Route path="/posts/:id/*" element={<Post />} />
        {/* 
        Na rota "/" a estrutura a ser renderiza é:
          <PaginaPadrao>
            <Inicio />
          </PaginaPadrao>
          
           Na rota "/sobremim" a estrutura a ser renderiza é:
          <PaginaPadrao>
            <Sobremim />
          </PaginaPadrao>
        */}
        <Route path="/*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes
