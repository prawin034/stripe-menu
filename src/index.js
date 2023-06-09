import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import App from './App';
import { AppProvider } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
