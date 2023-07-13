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

    // lista de habilidades
    const skills = useMemo(
        () => [
            { name: 'HTML', level: 80, icon: <HTMLIcon /> },
            { name: 'CSS', level: 70, icon: <CSSIcon /> },
            { name: 'TypeScript', level: 70, icon: <TypeScriptIcon /> },
            { name: 'React', level: 70, icon: <ReactIcon /> },
            { name: 'Node.js', level: 70, icon: <NodeIcon /> },
            { name: 'Next.js', level: 60, icon: <NextIcon /> },
            { name: 'MongoDB', level: 60, icon: <MongoIcon /> },
            { name: 'MySQL', level: 60, icon: <MySQLIcon /> },
            { name: 'Docker', level: 50, icon: <DockerIcon /> },
            { name: 'Linux', level: 50, icon: <LinuxIcon /> },
            { name: 'Git', level: 50, icon: <GitIcon /> },
            { name: 'Python', level: 50, icon: <PythonIcon /> },
            { name: 'Java', level: 40, icon: <JavaIcon /> },
            { name: 'PHP', level: 40, icon: <PHPIcon /> },
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
            skills,
        }),
        [isOpen, darkMode, skills]
    );

    return <Context.Provider value={context}>{children}</Context.Provider>;
};
