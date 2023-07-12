import { ReactNode, createContext } from 'react';

import { ContextType } from './types';

export const Context = createContext<ContextType>({
    isOpen: false,
    setIsOpen: () => {
        return;
    },
    darkMode: false,
    setDarkMode: () => {
        return;
    },
    skills: [
        {
            name: '',
            icon: '' as ReactNode,
            level: 0,
        },
    ],
});
