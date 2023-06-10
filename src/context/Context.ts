import { createContext } from 'react';

type ContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  sections: {
    name: string;
    path: string;
  }[];
};

const Context = createContext<ContextType>({
  isOpen: false,
  setIsOpen: () => { return; },
  darkMode: false,
  setDarkMode: () => { return; },
  sections: [{ name: '', path: '' }],
});

export default Context;
