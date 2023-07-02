import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Drawer, Navbar, Footer } from './components/layout';

export const App: FC = () => {
    return (
        <>
            <Drawer>
                <Navbar />
                <Outlet /> {/* renderiza os componentes filhos da rota "/" */}
                <Footer />
            </Drawer>
        </>
    );
};
