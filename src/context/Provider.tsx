import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { Context } from './Context';

export const Provider: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme') ?? 'dark';
        if (theme === 'light') setDarkMode(false);
    }, []);

    const sections = useMemo(() => [
        { name: '// Home', path: '/portfolio' },
        { name: '// Sobre Mim', path: '/portfolio/about' },
        { name: '// Habilidades', path: '/portfolio/skills' },
        { name: '// Projetos', path: '/portfolio/projects' },
        { name: '// Quiz', path: '/portfolio/quiz' },
        { name: '// Contato', path: '/portfolio/contact' },
    ], []);

    const context = useMemo(() => ({
        isOpen,
        setIsOpen,
        darkMode,
        setDarkMode,
        sections
    }), [isOpen, darkMode, sections]);

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    );
};
