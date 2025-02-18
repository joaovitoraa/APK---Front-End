import { useEffect } from 'react';
import styles from './Parallax.module.css';

const ParallaxWrapper = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('[data-speed]').forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed'));
        const offset = window.scrollY * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className={styles.parallax}>{children}</div>;
};

export default ParallaxWrapper;
