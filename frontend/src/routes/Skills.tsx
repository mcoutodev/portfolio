import { FC, useContext } from 'react';

import { SkillCard } from '../components';
import { Context } from '../context/Context';

export const Skills: FC = () => {
    const { skills } = useContext(Context);

    return (
        <main className="flex flex-col items-center">
            <section className="my-8 max-w-7xl">
                <h2 className="text-4xl text-center mt-8 mb-12 font-bold">
                    Habilidades
                </h2>
                <div className="flex gap-4 flex-wrap p-4 justify-center">
                    {skills.map(({ name, icon, level }) => (
                        <SkillCard
                            key={name}
                            name={name}
                            icon={icon}
                            level={level}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};
