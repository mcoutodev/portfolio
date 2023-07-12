import { useContext, useEffect, FC } from 'react';
import { Link } from 'react-router-dom';
import { themeChange } from 'theme-change';

import { Context } from '../../../context/Context';
import { HomeIcon, MoonIcon, SunIcon } from '../../svg';

import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';

export const Navbar: FC = () => {
    const { darkMode, setDarkMode } = useContext(Context);

    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);

    return (
        <div className="navbar bg-base-100 pr-4">
            <MenuMobile />

            <div className="flex-1">
                <Link
                    title="Voltar para a página inicial"
                    to="/"
                    className="hidden md:btn md:btn-ghost"
                >
                    <HomeIcon />
                </Link>
                <Link
                    title="Acesse meus contatos"
                    className="btn btn-ghost normal-case text-lg"
                    to="/contacts"
                >
                    Marlon Couto
                </Link>
            </div>

            <MenuDesktop />

            <div className="flex-none">
                <button
                    className="btn btn-circle btn-ghost"
                    data-set-theme={darkMode ? 'termLight' : 'termDark'}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    <label className="swap swap-rotate swap-active">
                        {/* this hidden checkbox controls the state */}
                        <SunIcon />
                        <MoonIcon />
                    </label>
                </button>
            </div>
        </div>
    );
};
