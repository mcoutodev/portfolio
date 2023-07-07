import { FC } from 'react';

import { GitHubIcon, LinkedInIcon, Logo } from '../svg';

export const Footer: FC = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <Logo />
                <p>
                    &copy; Feito com <span className="text-red-400">♥</span> em
                    2023 - Todos os direitos reservados
                </p>
            </div>

            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://github.com/mcoutodev/mcoutodev.github.io">
                    <GitHubIcon />
                </a>
                <a href="https://linkedin.com/in/mcoutodev">
                    <LinkedInIcon />
                </a>
            </div>
        </footer>
    );
};
