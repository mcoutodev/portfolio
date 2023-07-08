import { FC } from 'react';

import { Avatar, Code, Description } from '../components';

export const AboutMe: FC = () => {
    return (
        <main className="flex justify-center pt-4">
            <div className="flex flex-col items-center md:flex-row md:items-start max-w-7xl">
                <div className="flex flex-col items-center md:mx-12 md:mt-8">
                    <Avatar />
                    <Code />
                </div>
                <Description />
            </div>
        </main>
    );
};
