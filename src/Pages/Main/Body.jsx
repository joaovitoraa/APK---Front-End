import styles from './Body.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <>
      <div className={styles.ct}>
        <img src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/bg-xp_uamiuw.png" />
      </div>

      <div className={styles.painel_1}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/bg-seguranca_mh2ngx.png"
          alt="Credibilidade e segurança"
        />
        <div className={styles.painel_2}>
          <h1>Credibilidade e segurança</h1>
          <p>
            Somos uma empresa dinâmica, com seriedade e competência
            proporcionamos soluções diferenciadas para nossos clientes.
          </p>
          <button>FALE CONOSCO</button>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.titulo}>
          <h1>Quem confia e trabalha com a APK</h1>
        </div>
        <div>
          <div className={styles.slider}>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259370/icon-cliente4_xz4je5.png"
              alt="cimed"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259370/icon-cliente3_sogqeu.png"
              alt="brf"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/icon-cliente2_klxv36.png"
              alt="natura"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/icon-cliente_qxybfo.png"
              alt="brf"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259370/icon-cliente4_xz4je5.png"
              alt="cimed"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259370/icon-cliente3_sogqeu.png"
              alt="brf"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/icon-cliente2_klxv36.png"
              alt="natura"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/icon-cliente_qxybfo.png"
              alt="brf"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259370/icon-cliente4_xz4je5.png"
              alt="cimed"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259370/icon-cliente3_sogqeu.png"
              alt="brf"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/icon-cliente2_klxv36.png"
              alt="natura"
            />
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/icon-cliente_qxybfo.png"
              alt="brf"
            />
          </div>
        </div>
        <Link to="/cliente">
          <button>VER TODOS OS CLIENTES</button>
        </Link>
      </div>
      <div className={styles.container_2}>
        <div>
          <p>
            <span>“</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque
            mi, convallis et nulla et, pretium tempor quam.
            <span>”</span>
          </p>
          <h1>José da silva - empresa x</h1>
        </div>

        <div>
          <p>
            <span>“</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque
            mi, convallis et nulla et, pretium tempor quam.
            <span>”</span>
          </p>
          <h1>José da silva - empresa x</h1>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
            alt=""
          />
        </div>
        <div>
          <p>
            <span>“</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce neque
            mi, convallis et nulla et, pretium tempor quam.
            <span>”</span>
          </p>
          <h1>José da silva - empresa x</h1>
        </div>
      </div>
      <div className={styles.borda}></div>
      <div className={styles.container_3}>
        <h1>
          <span className={styles.sl_span}>
            Soluções personalizadas de transporte e logística{' '}
          </span>
          integrada atuando em toda a cadeia de suprimentos.
        </h1>
        <button>FALE CONOSCO</button>
      </div>
      <div className={styles.ct_04}>
        <div className={styles.ct_01}>
          <h1>Transporte nacional e internacional</h1>
          <p>
            Com uma ampla frota e equipe especializada, estamos preparados para
            atender as demandas de clientes em todas as regiões e setores.
          </p>
          <button>SAIBA MAIS</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1738755802/bg-transporte-red_bnv7p3.png"
            alt="transportes"
          />
        </div>
      </div>
    </>
  );
};

export default Body;
