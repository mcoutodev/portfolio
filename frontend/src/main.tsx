import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './App';
import { Provider } from './context/Provider';
import { AboutMe } from './routes/AboutMe';
import { Home } from './routes/Home';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/portfolio',
        element: <App />,
        children: [
            { path: '/portfolio', element: <Home /> },
            { path: '/portfolio/about', element: <AboutMe /> },
        ],
    },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Provider>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>,
);