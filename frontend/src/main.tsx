import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { Provider } from './context/Provider';
import { AboutMe } from './routes/AboutMe';
import { Home } from './routes/Home';

import './index.css';

// cria um roteador com as rotas da aplicação
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <AboutMe /> },
        ],
    },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Provider> {/* contexto da aplicação */}
            <RouterProvider router={router} /> {/* roteador da aplicação */}
        </Provider>
    </StrictMode>
);
