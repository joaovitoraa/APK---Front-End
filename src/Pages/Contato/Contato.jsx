import React from 'react';
import styles from './Contato.module.css';
const Contato = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    company: '',
  });
  const [errors, setErrors] = React.useState({});
  const regexPatterns = {
    name: /^[a-zA-Z\s\u00C0-\u00FF~]{3,}$/,
    phone: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    company: /^[a-zA-Z0-9\s]{2,}$/,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!regexPatterns[field].test(formData[field])) {
        newErrors[field] = `Campo inválido`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <div>
      <div className={styles.bg}>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739267388/contatos_xkwkyh.png"
          alt="banner"
          width="1408"
          height="205"
        />
      </div>
      <div className={styles.container}>
        <div>
          <h1>Transporte de qualidade para sua empresa.</h1>
          <p>
            Com uma ampla frota e equipe especializada, estamos preparados para
            atender as demandas de clientes em todas as regiões e setores.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739267388/mapa_g9ixb2.png"
          alt="mapa"
          width="474"
          height="463"
        />
      </div>

      <div>
        <div className={styles.container2}>
          <h1>Filiais</h1>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
            alt="barra"
            width="240"
            height="3"
          />
          <h2>Conheça nossas Filiais</h2>
        </div>
        <div className={styles.listas}>
          <ul>
            <li>Barueri/SP - Matriz</li>
            <li>Jundiaí/GO </li>
            <li>Belo Horizonte/MG </li>
            <li>Betim/MG </li>
            <li>Feira de Santana / BA </li>
          </ul>
          <ul>
            <li>Blumenau/ SC</li>
            <li>Maracanáu/ CE </li>
            <li>Porto Alegre/ RS </li>
            <li>São Gonçalo do Amarante/ RN </li>
            <li>Vitória /ES </li>
          </ul>
        </div>
      </div>
      <div className={styles.container3}>
        <h1>Fale Conosco</h1>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739025088/Line_8_kigkg3.png"
          alt="barra"
          width="240"
          height="3"
        />
        <h2>Entre em contato e conheça nossas soluções para sua empresa.</h2>
      </div>
      <div className={styles.container4}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Nome:" className={styles.label}>
              Nome
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.name && <p className="">{errors.name}</p>}
          </div>
          <div>
            <label className={styles.label}>Telefone</label>
            <input
              type="text"
              name="phone"
              placeholder="(DDD) 0000-0000"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <div>
            <label className={styles.label}>E-mail Corporativo</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.email && <p className="">{errors.email}</p>}
          </div>
          <div>
            <label className={styles.label}>Empresa</label>
            <input
              type="text"
              placeholder="Digite o nome de sua empresa"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.company && <p className="">{errors.company}</p>}
          </div>
          <button type="submit" className={styles.bt}>
            Solicitar Contato
          </button>
        </form>
        <div className={styles.container5}>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739267388/endereco_wkzby0.png"
            alt="mapa"
            width="514"
            height="328"
          />
          <h1>Nosso endereço</h1>
          <div className={styles.ct}>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739379478/localizacao_kjb0ub.svg"
              alt="localização"
              width="13"
              height="17"
            />
            <span>
              {' '}
              Rua Otávio Pereira dos Anjos, 442 - Jardim das Américas -
              Curitiba-PR
            </span>
          </div>
          <div className={styles.ct}>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739379478/telefone_idmb3c.svg"
              alt="telefone"
              width="13"
              height="13"
            />
            <span> 55 41 3303 7492 | 55 41 3303 7463</span>
          </div>
          <div className={styles.ct}>
            <img
              src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739379478/email_kse1iw.svg"
              alt=""
              width="13"
              height="9"
            />
            <span> fale.conosco@apk.com.br</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
