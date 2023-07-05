import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Hero.module.css';

const { animation, first, slide, second } = styles;

export const Hero: FC = () => {
    return (
        <main className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <div className={animation}>
                        <span className={`${first} text-primary bg-base-200`}>
                            Hello,
                        </span>
                        <span className={slide}>
                            <span className={second}>World!</span>
                        </span>
                    </div>
                    <p className="py-6">
                        Eu sou um desenvolvedor web com experiência em
                        TypeScript, React, Tailwind e Node.js. Bem-vindo ao meu
                        portfólio pessoal, a casa é sua! 👋
                    </p>
                    <Link to="/about">
                        <button className="btn btn-primary">Começar</button>
                    </Link>
                </div>
            </div>
        </main>
    );
};
