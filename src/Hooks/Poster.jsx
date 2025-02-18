import { useEffect, useState } from 'react';
import styles from './Poster.module.css';
import { Link } from 'react-router-dom';

const Poster = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apk-api-five.vercel.app/poster/');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados');
        }
        const data = await response.json();
        setPosts(data.slice(0, 4));
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className={styles.ct_blog}>
          <h1>Fique por dentro das novidades</h1>
          <Link className={styles.blog_link} to="/blog">
            Ir para o Blog APK
          </Link>
        </div>

        <div className={styles.poster}>
          {posts.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            posts.map((post) => (
              <div key={post._id}>
                <img src={post.image} alt={post.titulo} width="200" />
                <h2>{post.titulo}</h2>
                <p>{post.descricao}</p>
                <Link className={styles.leia_mais} to="/blog">
                  Leia Mais
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Poster;
