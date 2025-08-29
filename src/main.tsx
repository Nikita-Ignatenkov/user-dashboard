import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { AppProviders } from './providers/AppProviders';


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Не найден элемент #root для монтирования приложения');
}

createRoot(rootElement).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>
);
