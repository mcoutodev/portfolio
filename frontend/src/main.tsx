import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { ErrorPage } from './components';
import { Provider } from './context/Provider';
import { AboutMe } from './routes/AboutMe';
import { Home } from './routes/Home';
import { Skills } from './routes/Skills';

import './index.css';

// cria um roteador com as rotas da aplicação
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <AboutMe /> },
            { path: '/skills', element: <Skills /> },
        ],
    },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Provider>
            {' '}
            {/* contexto da aplicação */}
            <RouterProvider router={router} /> {/* roteador da aplicação */}
        </Provider>
    </StrictMode>
);
