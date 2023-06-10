import React, { useContext, useEffect } from 'react';
import { themeChange } from 'theme-change';

import Context from '../../context/Context';
import MoonIcon from '../svg/MoonIcon';
import SunIcon from '../svg/SunIcon';
import MenuMobile from './MenuMobile';
import MenuDesktop from './MenuDesktop';

const Navbar: React.FC = () => {
  const { darkMode, setDarkMode } = useContext(Context);

  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="navbar bg-base-100">
      <MenuMobile />
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-lg" href='https://github.com/mcoutodev'>Marlon Couto</a>
      </div>
      <MenuDesktop />
      <div className="flex-none">
        <button className="btn btn-circle btn-ghost" data-set-theme={darkMode ? 'light' : 'dark'} onClick={() => setDarkMode(!darkMode)}>
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

export default Navbar;
