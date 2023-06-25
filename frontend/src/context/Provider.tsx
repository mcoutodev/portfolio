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
        { name: '// Home', path: '/' },
        { name: '// Sobre Mim', path: '/about' },
        { name: '// Habilidades', path: '/skills' },
        { name: '// Projetos', path: '/projects' },
        { name: '// Quiz', path: '/quiz' },
        { name: '// Contato', path: '/contact' },
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
