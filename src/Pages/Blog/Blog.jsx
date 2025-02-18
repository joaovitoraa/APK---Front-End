import { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import { Link, useParams } from 'react-router-dom';

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const postIds = [
    '67aa3d2487436afbd7ac70ec',
    '67aa3dc50523a1776dd9a9c8',
    '67aa3e0f0523a1776dd9a9ca',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Promise.all(
          postIds.map((_id) =>
            fetch(`https://apk-api-five.vercel.app/poster/${_id}`),
          ),
        );
        const data = await Promise.all(response.map((res) => res.json()));
        setBlog(data);
        setBlog(data.slice(0, 3));
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date
      .toLocaleDateString('pt-Br', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div>
          <h1 className={styles.pt_titulo}>Posts recentes</h1>
          {blog.map((poster) => (
            <div className={styles.poster} key={poster.id}>
              <img
                src={poster.image}
                alt="publicação"
                width="180"
                height="180"
              />
              <h1 className={styles.pt_h1}>{poster.titulo}</h1>
              <h2 className={styles.pt_data}>{formatDate(poster.data)}</h2>
            </div>
          ))}
        </div>
        <div>
          <h1 className={styles.pt_titulo}>Tags</h1>

          <div>
            <button>VIAGEM</button>
            <button>CARGA</button>
            <button>EVENTO</button>
            <button>MAIO</button>
            <button>NOVO</button>
            <button>TRABALHO</button>
            <button>SOCIAL</button>
          </div>
        </div>
      </div>
      <div className={styles.container3}>
        {blog.map((post) => (
          <div key={post.id}>
            <img src={post.image} alt="publicação" />
            <h1>{post.titulo}</h1>
            <h2>{formatDate(post.data)}</h2>
            <p>{post.descricao}</p>
            <button>LEIA MAIS</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
