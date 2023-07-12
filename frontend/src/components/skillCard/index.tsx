import { FC, useEffect, useState } from 'react';

import { SkillCardProps } from './types.ts';

export const SkillCard: FC<SkillCardProps> = ({ name, icon, level }) => {
    const [currentLevel, setCurrentLevel] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLevel((prev) => {
                if (prev === level) {
                    clearInterval(interval);
                    return prev;
                }

                return prev + 1;
            });
        }, 25);

        return () => clearInterval(interval);
    }, [level]);

    return (
        <div className="card w-44 h-72 bg-base-100 shadow-xl group">
            <div className="card-body flex flex-col items-center gap-4">
                <div className="w-20 h-20 flex justify-center items-center">
                    {icon}
                </div>

                <h3 className="card-title">{name}</h3>

                <div
                    className="radial-progress text-primary"
                    style={{ ['--value' as string]: currentLevel }}
                ></div>

                <div className="relative bottom-[4.5rem]">
                    <span className="text-[1.25rem] font-bold mr-0.5">
                        {currentLevel}
                    </span>
                    <span className="font-bold">%</span>
                </div>
            </div>
        </div>
    );
};
