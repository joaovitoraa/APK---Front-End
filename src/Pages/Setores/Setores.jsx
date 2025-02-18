import React from 'react';
import styles from './Setores.module.css';
const Setores = () => {
  return (
    <div>
      <div className={styles.bg}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739390125/parked-trucks-front-bright-sunrise_1_2_bxqfej.png"
          alt="banner"
          width="1440"
          height="208"
        />
      </div>
      <div className={styles.container}>
        <h1>ESG</h1>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
          alt="barra"
          width="240"
          height="3"
        />
        <p>
          Estamos comprometidos não apenas com o sucesso dos nossos negócios,
          mas também com o{' '}
          <span className={styles.span1}>
            bem-estar do planeta e das pessoas.
          </span>{' '}
          Nossas ações são guiadas pelo desejo de criar um impacto positivo.
        </p>
      </div>
      <div className={styles.container2}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739390142/image_1_muuyhd.png"
          alt="imagem mundo"
          width="344"
          height="450"
        />
        <h1>
          APK <br />
          <span className={styles.span2}>ESG</span>{' '}
        </h1>
        <h2>
          Buscamos <span className={styles.span3}>melhorias</span> para atender
          todos os <span className={styles.span3}>princípios.</span>
        </h2>
      </div>
      <div className={styles.container3}>
        <h1>Case Grupo Pão de Açucar</h1>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
          alt="barra"
          width="240"
          height="3"
        />
      </div>
      <div className={styles.container4}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739390695/2016__Implementa%C3%A7%C3%A3o_de_Ve%C3%ADculos_H%C3%ADbridos_Diesel_e_GNV_em_colabora%C3%A7%C3%A3o_com_o_P%C3%A3o_de_A%C3%A7%C3%BAcar_um_passo_pioneiro_em_sustentabilidade._2021__Aquisi%C3%A7%C3%A3o_de_Carretas_Ba%C3%BA_Sustent%C3%A1veis_compromisso_cont%C3%ADnuo_com_a_efici%C3%AAncia_energ%C3%A9tica_ybglkd.png"
          alt="texto info"
          width="499"
          height="316"
        />
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739390396/Group_8_q5cldy.png"
          alt="texto-info 2"
          width="407"
          height="328"
        />
      </div>
    </div>
  );
};

export default Setores;
