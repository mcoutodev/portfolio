import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Drawer, Navbar, Footer } from './components/layouts';

export const App: FC = () => {
    return (
        <>
            <Drawer>
                <Navbar />
                <Outlet />
                <Footer />
            </Drawer>
        </>
    );
};
