import { useContext, FC } from 'react';

import { Context } from '../../../context/Context';
import { Link } from 'react-router-dom';

export const MenuDesktop: FC = () => {
    const { sections } = useContext(Context);

    return (
        <ul className="md:menu md:menu-horizontal bg-base-100 mr-4 hidden">
            {sections.map(({ name, path }) => (
                <li key={name}>
                    <Link to={path} className="hover:text-secondary transition text-base">
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
