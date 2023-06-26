import { useContext, FC } from 'react';

import { Context } from '../../../context/Context';
import { CloseIcon, HamburgerIcon } from '../../svg';

export const MenuMobile: FC = () => {
    const { isOpen, setIsOpen } = useContext(Context);

    return (
        <div className="flex-none lg:hidden">
            {/* mostra o menu hambúrguer apenas em telas pequenas */}
            <button className="btn btn-circle btn-ghost">
                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input
                        type="checkbox"
                        onChange={() => setIsOpen(!isOpen)}
                        checked={isOpen}
                    />
                    <HamburgerIcon />
                    <CloseIcon />
                </label>
            </button>
        </div>
    );
};
