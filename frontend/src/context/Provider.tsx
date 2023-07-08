import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';

import {
    CSSIcon,
    DockerIcon,
    GitIcon,
    HTMLIcon,
    JavaIcon,
    LinuxIcon,
    MongoIcon,
    MySQLIcon,
    NextIcon,
    NodeIcon,
    PHPIcon,
    PythonIcon,
    ReactIcon,
    TypeScriptIcon,
} from '../components/svg/skills';

import { Context } from './Context';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    // verifica o tema salvo no localStorage
    useEffect(() => {
        const theme = localStorage.getItem('theme') ?? 'dark';
        if (theme === 'light') setDarkMode(false);
    }, []);

    // disponibiliza as rotas e seus nomes para a aplicação
    const sections = useMemo(
        () => [
            { name: '// Home', path: '/' },
            { name: '// Sobre Mim', path: '/about' },
            { name: '// Habilidades', path: '/skills' },
            { name: '// Projetos', path: '/projects' },
            { name: '// Quiz', path: '/quiz' },
            { name: '// Contato', path: '/contact' },
        ],
        []
    );

    // lista de habilidades
    const skills = useMemo(
        () => [
            { name: 'HTML', level: 90, icon: <HTMLIcon /> },
            { name: 'CSS', level: 80, icon: <CSSIcon /> },
            { name: 'TypeScript', level: 80, icon: <TypeScriptIcon /> },
            { name: 'React', level: 80, icon: <ReactIcon /> },
            { name: 'Node.js', level: 80, icon: <NodeIcon /> },
            { name: 'Next.js', level: 70, icon: <NextIcon /> },
            { name: 'MongoDB', level: 70, icon: <MongoIcon /> },
            { name: 'MySQL', level: 70, icon: <MySQLIcon /> },
            { name: 'Docker', level: 60, icon: <DockerIcon /> },
            { name: 'Linux', level: 60, icon: <LinuxIcon /> },
            { name: 'Git', level: 60, icon: <GitIcon /> },
            { name: 'Python', level: 60, icon: <PythonIcon /> },
            { name: 'PHP', level: 60, icon: <PHPIcon /> },
            { name: 'Java', level: 50, icon: <JavaIcon /> },
        ],
        []
    );

    // disponibiliza o contexto para a aplicação
    // o useMemo é usado para evitar que o contexto seja recriado
    // a cada renderização do componente
    const context = useMemo(
        () => ({
            isOpen,
            setIsOpen,
            darkMode,
            setDarkMode,
            sections,
            skills,
        }),
        [isOpen, darkMode, sections, skills]
    );

    return <Context.Provider value={context}>{children}</Context.Provider>;
};
