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

                    <p className="py-6 md:text-lg">
                        Eu sou um desenvolvedor web com experiência em
                        <span className="text-primary"> TypeScript</span>,
                        <span className="text-primary"> React</span>,
                        <span className="text-primary"> Tailwind</span> e
                        <span className="text-primary"> Node.js</span>.
                        Bem-vindo ao meu portfólio pessoal, a casa é sua! 👋
                    </p>

                    <Link
                        to="/about"
                        title="Clique para saber mais"
                    >
                        <button className="btn btn-primary">Começar</button>
                    </Link>
                </div>
            </div>
        </main>
    );
};
