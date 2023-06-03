import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';

import Context from './Context';
import { ProviderProps } from '../types/ProviderProps';

export default function Provider({ children }: ProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme') ?? 'dark';
    if (theme === 'light') {
      setDarkMode(false);
    }
  }, []);

  const sections = useMemo(() => [
    { name: 'Home', path: '/' },
    { name: 'Sobre Mim', path: '/about' },
    { name: 'Habilidades', path: '/skills' },
    { name: 'Projetos', path: '/projects' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'Contato', path: '/contact' },
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
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
