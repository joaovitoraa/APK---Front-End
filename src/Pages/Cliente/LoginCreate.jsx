import styles from './LoginCreate.module.css';
import React, { useContext } from 'react';
import Error from '../Helper/Error';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginCreate = () => {
  const [usuario, setUsuario] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const data = {
      email,
      senha,
      usuario,
    };

    try {
      const response = await fetch('https://apk-api-five.vercel.app/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        throw new Error('Falha no Cadastro');
      }

      const result = await response.json();
      alert('Cadastro feito! Seja Bem vindo ao Grupo APK!');
      // Salve o token ou faça algo com a resposta
      // Exemplo: localStorage.setItem('token', result.token);
    } catch (error) {
      setError('Erro ao cadastrar');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Login / Registro</h1>
        <img
          src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739463857/Vector_1_k7imsv.png"
          alt=""
        />
      </div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739463812/Vector_3_nzg1q8.png"
            alt=""
          />
          <h1>Registro</h1>
          <form onSubmit={handleLogin}>
            <div>
              <label className={styles.label}>Nome</label>
              <br />
              <input
                className={styles.input}
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>
            <div>
              <label className={styles.label}>Email</label>
              <br />
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className={styles.label}>Senha</label>
              <br />
              <input
                className={styles.input}
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className={styles.bt} type="submit" disabled={loading}>
              {loading ? 'Carregando...' : 'Cadastrar'}
            </button>
          </form>

          <Link className={styles.perdeu} to="/cliente">
            Já tem uma conta?
          </Link>
        </div>
        <div className={styles.container4}>
          <img
            src="https://res.cloudinary.com/dj3gku8z9/image/upload/v1739463812/Vector_3_nzg1q8.png"
            alt=""
          />
          <h1>
            <span className={styles.spn1}>LOGIN /</span> REGISTRO
          </h1>
          <p>
            Se você ainda não é nosso cliente, faça seu cadastrado e entre para
            o grupo APK.
          </p>
          <Link to="/cliente">
            <button>LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginCreate;
