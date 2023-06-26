import { FC } from 'react';

export const Avatar: FC = () => {
    return (
        <div className="avatar py-8">
            <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                    src="images/profile_verde.jpg"
                    alt="Uma foto de um rapaz sorrindo, com árvores ao fundo."
                />
            </div>
        </div>
    );
};
