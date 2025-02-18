import styles from './Institucional.module.css';
const Institucional = () => {
  return (
    <div>
      <div className={styles.container}>
        <div>
          <h1>Mais que uma transportadora:</h1>
          <h2>A APK Veio para agregar valor a seus produtos.</h2>
          <p>
            Desde 1996, a APK tem trabalhado para oferecer soluções cada vez
            melhores em transporte e, também, na área de logística integrada.
            Nossa trajetória sempre contou com
            <span className={styles.span1}>
              {' '}
              competência, seriedade, agilidade e inovação.{' '}
            </span>
          </p>
          <button>FALE CONOSCO</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739020684/background_llj68e.png"
            alt="bg-01"
          />
        </div>
      </div>

      <div className={styles.container2}>
        <h1>Atualmente, a APK atua em toda a cadeia de suprimentos:</h1>
        <h2>
          Tudo isso para complementar a principal função da empresa: fazer um
          transporte de qualidade.
        </h2>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739021167/apk_phyaib.png"
          alt="apk"
        />
      </div>
      <div className={styles.bg}>
        <div className={styles.container3}>
          <div>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739021168/seal-100-quality_1_odttmu.png"
              alt="Quality"
            />
          </div>
          <div>
            <h1>
              Política do sistema de <br />
              <span className={styles.sp_p}>Gestão Integrado</span>
            </h1>
            <p>
              A <span className={styles.sp_pk}>APK Logística e Transporte</span>{' '}
              tem o compromisso com a satisfação de seus clientes, realizando
              trabalhos diferenciados de logística e transporte, com{' '}
              <span className={styles.sp_red}>
                resultado financeiro, eficiência operacional, planejamento
                estratégico e prevenção de riscos, respeitando o meio ambiente,
                segurança e saúde ocupacional,
              </span>
              protegendo seu patrimônio físico, proibindo expressamente a
              utilização de qualquer tipo de droga ou bebida alcoólica e
              buscando a melhoria contínua de seus processos.
            </p>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.container4}>
        <h1>Objetivos APK</h1>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739021392/Group_422_drqv3s.png"
          alt="objetivos apk"
        />
      </div>
      <div className={styles.ct_bg5}>
        <div className={styles.container5}>
          <div className={styles.v}>
            <h1>Valores</h1>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
              alt=""
            />
            <p>
              Segurança em Primeiro Lugar Senso de Dono Excelência no
              Atendimento Responsabilidade Social Colaboração Integridade
              Tradição e Inovação
            </p>
          </div>
          <div className={styles.v}>
            <h1>Missão</h1>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
              alt=""
            />
            <p>
              Ser o maior e melhor na cadeia de fornecimento logístico e na
              satisfação dos clientes, obtendo rentabilidade sustentada para a
              APK e seus parceiros.
            </p>
          </div>
          <div className={styles.v}>
            <h1>Visão</h1>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
              alt=""
            />
            <p>
              Agregar valor aos nossos produtos e serviços, visando sempre
              qualidade superior, segurança e preservação do meio ambiente.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container6}>
        <div>
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
            alt="Transporte nacional"
          />
        </div>
      </div>
    </div>
  );
};

export default Institucional;
