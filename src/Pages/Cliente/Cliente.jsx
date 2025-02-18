import styles from './Cliente.module.css';
import React, { useContext } from 'react';
import Input from './Input';
import Button from './Button';
import Error from '../Helper/Error';
// import { UserContext } from '../../UserContext';
import useForm from '../../Hooks/useForm';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Cliente = () => {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    const data = {
      email,
      senha,
    };

    try {
      const response = await fetch(
        'https://apk-api-five.vercel.app/usuarios/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error('Falha no login');
      }

      const result = await response.json();
      navigate('/blog');

      // Salve o token ou faça algo com a resposta
      // Exemplo: localStorage.setItem('token', result.token);
    } catch (error) {
      setError('Erro ao fazer login');
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
          <h1>Entrar</h1>
          <form onSubmit={handleLogin}>
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
              {loading ? 'Carregando...' : 'Entrar'}
            </button>
          </form>

          <Link className={styles.perdeu} to="/cliente/criar">
            Perdeu a Senha?
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
          <Link to="/cliente/criar">
            <button>REGISTRO</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cliente;
