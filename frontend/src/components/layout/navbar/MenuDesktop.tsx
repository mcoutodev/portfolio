import { FC } from 'react';
import { Link } from 'react-router-dom';

import sections from '../../../constants/';

export const MenuDesktop: FC = () => {
    return (
        <ul className="lg:menu lg:menu-horizontal bg-base-100 mr-4 hidden">
            {sections.map(({ name, path }) => (
                <li key={name}>
                    <Link
                        title={path}
                        to={path}
                        className="hover:text-secondary transition text-base"
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
