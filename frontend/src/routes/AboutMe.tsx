import { FC } from 'react';

import { Avatar, Code, Description } from '../components';

export const AboutMe: FC = () => {
    return (
        <main className="flex flex-col items-center">
            <Avatar />
            <Code />
            <Description />
        </main>
    );
};
