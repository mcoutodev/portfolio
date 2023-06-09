import PropTypes from "prop-types";
import React, { PropsWithChildren, useContext } from 'react';
import Context from '../context/Context';

const Drawer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, setIsOpen, sections } = useContext(Context);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(false)} />
      <div className="drawer-content">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* Sidebar content here */}
          {sections.map(({ name, path }) => (
            <li key={name}>
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Drawer;
