// import './index.css';
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/institucional"
            element={
              <ParallaxWrapper>
                <Institucional />{' '}
              </ParallaxWrapper>
            }
          />
          <Route
            path="/blog"
            element={
              <ParallaxWrapper>
                <Blog />{' '}
              </ParallaxWrapper>
            }
          />
          <Route
            path="/contato"
            element={
              <ParallaxWrapper>
                <Contato />{' '}
              </ParallaxWrapper>
            }
          />
          <Route
            path="/solucoes"
            element={
              <ParallaxWrapper>
                <Solucoes />
              </ParallaxWrapper>
            }
          />
          <Route
            path="/frota"
            element={
              <ParallaxWrapper>
                <Frota />{' '}
              </ParallaxWrapper>
            }
          />
          <Route
            path="/setores"
            element={
              <ParallaxWrapper>
                <Setores />{' '}
              </ParallaxWrapper>
            }
          />
          <Route
            path="/cliente"
            element={
              <ParallaxWrapper>
                <Cliente />{' '}
              </ParallaxWrapper>
            }
          />
          <Route
            path="/cliente/criar"
            element={
              <ParallaxWrapper>
                <LoginCreate />{' '}
              </ParallaxWrapper>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
