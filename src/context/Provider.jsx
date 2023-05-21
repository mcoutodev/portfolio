import PropTypes from "prop-types";
import { useMemo, useState } from 'react';

import Context from './Context';

export default function Provider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const context = useMemo(() => ({
    isOpen,
    setIsOpen,
  }), [isOpen]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
