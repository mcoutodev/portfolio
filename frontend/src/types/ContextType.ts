export type ContextType = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
    sections: {
        name: string;
        path: string;
    }[];
};
