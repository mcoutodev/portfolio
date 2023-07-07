import { useContext, useEffect, FC } from 'react';
import { themeChange } from 'theme-change';

import { Context } from '../../../context/Context';
import { MoonIcon, SunIcon } from '../../svg';

import { MenuDesktop } from './MenuDesktop';
import { MenuMobile } from './MenuMobile';

export const Navbar: FC = () => {
    const { darkMode, setDarkMode } = useContext(Context);

    useEffect(() => {
        themeChange(false);
        // 👆 false parameter is required for react project
    }, []);

    return (
        <div className="navbar bg-base-100">
            <MenuMobile />

            <div className="flex-1">
                <a
                    className="btn btn-ghost normal-case text-lg"
                    href="https://github.com/mcoutodev"
                >
                    Marlon Couto
                </a>
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
