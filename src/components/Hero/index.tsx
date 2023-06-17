import { FC } from 'react';
import Avatar from '../Avatar';
import styles from './Hero.module.css';

const Hero: FC = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Avatar />
        <div>
          <div className={styles.animation}>
            <span className={`${styles.first} text-primary bg-base-200`}>Hello,</span>
            <span className={styles.slide}>
              <span className={styles.second}>World!</span>
            </span>
          </div>
          <p className="py-6">
            Eu sou um desenvolvedor web full-stack com experiência em TypeScript, React, Tailwind e Node.js.
            Bem-vindo ao meu portfólio pessoal, a casa é sua! 👻
          </p>
          <button className="btn btn-primary">Começar</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
