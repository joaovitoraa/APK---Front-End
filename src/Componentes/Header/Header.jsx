import styles from './Header.module.css';
import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link className={styles.link} to="/">
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/logo_mgrhzc.png"
              alt="logo"
              width="215"
              height="71"
            />
          </Link>
        </div>
        <div className={styles.icones}>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259368/instagram_qz0ncw.png"
            alt="instagram"
            width="26"
            height="26"
          />
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259368/linkedln_xrxsf5.png"
            alt="linkedln"
            width="26"
            height="26"
          />
        </div>
      </header>
      <button className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
        <svg className="svg" width="50" height="24" viewBox="0 0 24 24">
          <rect
            className={`${styles.top} ${menuOpen ? styles.openTop : ''}`}
            width="50"
            height="3"
            fill="red"
          />
          <rect
            className={`${styles.bottom} ${menuOpen ? styles.openBottom : ''}`}
            width="50"
            height="3"
            fill="red"
            y="8"
          />
        </svg>
      </button>
      <nav className={`${styles.container} ${menuOpen ? styles.open : ''}`}>
        <Link className={styles.link} to="/Institucional">
          Institucional
        </Link>
        <Link className={styles.link} to="/solucoes">
          Soluções
        </Link>
        <Link className={styles.link} to="/setores">
          Setores Atendidos
        </Link>
        <Link className={styles.link} to="/frota">
          Frota e equipamentos
        </Link>
        <Link className={styles.link} to="/cliente">
          Clientes
        </Link>
        <Link className={styles.link} to="/Blog">
          Blog
        </Link>
        <Link className={styles.link} to="/contato">
          Contato
        </Link>
        <Link to="/cliente">
          <button className={styles.button}>Área do cliente</button>
        </Link>
      </nav>
    </>
  );
};

export default Header;
