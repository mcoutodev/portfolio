import { ReactNode } from 'react';

export type ContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    skills: {
        name: string;
        icon: ReactNode;
        level: number;
    }[];
};
