import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Provider from './context/Provider';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
