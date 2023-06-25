import { createContext } from 'react';

import { ContextType } from '../types/ContextType';

export const Context = createContext<ContextType>({
    isOpen: false,
    setIsOpen: () => { return; },
    darkMode: false,
    setDarkMode: () => { return; },
    sections: [{ name: '', path: '' }],
});
