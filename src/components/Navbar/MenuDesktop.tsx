import { useContext, FC } from 'react';
import Context from '../../context/Context';

const MenuDesktop: FC = () => {
  const { sections } = useContext(Context);

  return (
    <ul className="md:menu md:menu-horizontal bg-base-100 mr-4 hidden">
      {sections.map(({ name, path }) => (
        <li key={name}>
          <a href={path} className='hover:text-secondary transition'>{name}</a>
        </li>
      ))}
    </ul>
  );
};

export default MenuDesktop;
