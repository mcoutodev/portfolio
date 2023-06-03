import React, { useContext } from 'react';

import CloseIcon from '../svg/CloseIcon';
import HamburgerIcon from '../svg/HamburgerIcon';
import Context from '../../context/Context';

export default function MenuMobile() {
  const { isOpen, setIsOpen } = useContext(Context);

  return (
    <div className="flex-none md:hidden">
      {/* mostra o menu hambúrguer apenas em telas pequenas */}
      <button className="btn btn-circle btn-ghost">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={() => setIsOpen(!isOpen)} checked={isOpen} />
          <HamburgerIcon />
          <CloseIcon />
        </label>
      </button>
    </div>
  );
}
