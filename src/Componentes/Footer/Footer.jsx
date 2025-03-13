import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738871065/logo-2_z6mcxg.png"
            alt="logo"
          />
        </div>
        <div className={styles.column}>
          <h1 className={styles.footer}>APK</h1>
          <Link className={styles.footer} to="/institucional">
            Sobre nós
          </Link>
          <Link className={styles.footer} to="/solucoes">
            Soluções
          </Link>
          <Link className={styles.footer} to="/blog">
            Tecnologia
          </Link>
          <Link className={styles.footer} to="/clientes">
            Clientes
          </Link>
        </div>

        <div className={styles.column}>
          <h1 className={styles.footer}>Entre em contato</h1>
          <Link className={styles.footer} to="/institucional">
            Trabalhe conosco
          </Link>
          <Link className={styles.footer} to="/contato">
            Fale conosco
          </Link>
          <Link className={styles.footer} to="/contato">
            Localização
          </Link>
        </div>

        <div className={styles.column}>
          <h1 className={styles.footer}>Siga nossas redes</h1>
          <Link
            className={styles.column}
            to="https://www.instagram.com/"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738871866/instagram-footer_xhj6lc.png"
              alt="Instagram"
              className={styles.socialIcon}
            />
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738871866/linkdln-footer_zaq3pt.png"
              alt="LinkedIn"
              className={styles.socialIcon}
            />
          </Link>
        </div>
      </div>
      <div className={styles.ftsp}>
        <span>Copyright © 2024 APK. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;
