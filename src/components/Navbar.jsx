import { useContext } from 'react';

import Context from '../context/Context';
import CloseIcon from './svg/CloseIcon';
import HamburgerIcon from './svg/HamburgerIcon';
import MoonIcon from './svg/MoonIcon';
import SunIcon from './svg/SunIcon';

export default function Navbar() {
  const { setIsOpen, isOpen } = useContext(Context);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-circle btn-ghost">
          <label className="swap swap-rotate">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" onChange={() => setIsOpen(!isOpen)} checked={isOpen} />
            <HamburgerIcon />
            <CloseIcon />
          </label>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-lg" href='https://github.com/mcoutodev'>Marlon Couto</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-circle btn-ghost">
          <label className="swap swap-rotate">
            {/* <!-- this hidden checkbox controls the state --> */}
            <input type="checkbox" />
            <SunIcon />
            <MoonIcon />
          </label>
        </button>
      </div>
    </div>
  );
}
