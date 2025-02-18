import React from 'react';
import styles from './Solucoes.module.css';
const Solucoes = () => {
  return (
    <div>
      <div className={styles.bg1}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739385128/parked-trucks-front-bright-sunrise_1_1_vucbvi.png"
          alt="background"
        />
      </div>
      <div className={styles.container}>
        <h1>Conheça nossas soluções</h1>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
          alt="barra"
        />
        <h2>
          Com serviços customizados, criados para atender as diversas
          necessidades de nossos clientes, em qualquer modalidade ou região.
        </h2>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739385149/Group_431_x6ehkg.png"
          alt="soluções"
        />
      </div>
      <div className={styles.bg}>
        <div className={styles.container2}>
          <h1>
            Soluções personalizadas de transporte e logística <br />
            <span className={styles.span1}>
              Criamos soluções logísticas que aumentam oportunidades para nossos
              clientes, otimizando cada aspecto do transporte de cargas.
            </span>
          </h1>
          <button>FALE CONOSCO</button>
        </div>
      </div>
      <div className={styles.container3}>
        <div>
          <h1>
            Mega Expressa{' '}
            <span className={styles.span2}> Redução de Transit Time</span>
          </h1>
          <p>
            Somos especialistas em projetos com paradas estratégicas ao longo do
            trajeto e trocando o motorista e permitindo que o caminhão não pare
            e assim podemos garantir a melhor produtividade possível e cuidando
            da saúde do motorista e respeitando a jornada em conformidade com a
            lei.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739385128/mega_bvtnnt.png"
          alt="imagem-bg"
        />
      </div>
      <div className={styles.container4}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739385128/Frame_zr9mnh.png"
          alt="imagem-info"
        />
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739385779/Group_432_c40qm5.png"
          alt="imagem-info2"
          className={styles.mg}
        />
      </div>
      <div className={styles.container5}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739385128/double_c3gyy1.png"
          alt="imagem-info3"
        />
        <div>
          <h1>
            Double Deck{' '}
            <span className={styles.span3}>
              Especialistas em operações com carretas Double Deck{' '}
            </span>
          </h1>
          <p>
            Fornecemos todo o suporte técnico e logístico para a implantação
            deste modelo de equipamento e contamos com empilhadeiras e mão de
            obra especiali~adaæ motoristas treinados e uma experiência de mais
            de 20 anos na utilização de carretas Baú Double Deck.
          </p>
        </div>
      </div>
      <div className={styles.container6}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739386313/Group_9_v5luan.png"
          alt="info-text"
        />
      </div>
    </div>
  );
};

export default Solucoes;
