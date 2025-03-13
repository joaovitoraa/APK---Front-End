import './index.css';
import Header from './Componentes/Header/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Footer from './Componentes/Footer/Footer.jsx';
import Institucional from './Pages/Institucional/Institucional.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Contato from './Pages/Contato/Contato.jsx';
import Solucoes from './Pages/Solucoes/Solucoes.jsx';
import Frota from './Pages/Frota/Frota.jsx';
import Setores from './Pages/Setores/Setores.jsx';
import Cliente from './Pages/Cliente/Cliente.jsx';
import ParallaxWrapper from './Componentes/ParallaxScroll/ParallaxScroll.jsx';
import useSmoothScroll from './Hooks/useSmoothScroll.jsx';
// import User from './Componentes/Cliente/User.jsx';
import LoginCreate from './Pages/Cliente/LoginCreate.jsx';
// import ProtectedRoute from './Componentes/Helper/ProtectedRoute.jsx';

const App = () => {
  useSmoothScroll();
  return (
    <div>
      <BrowserRouter>
        <ParallaxWrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<Institucional />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/frota" element={<Frota />} />
            <Route path="/setores" element={<Setores />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/cliente/criar" element={<LoginCreate />} />
          </Routes>
          <Footer />
        </ParallaxWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
