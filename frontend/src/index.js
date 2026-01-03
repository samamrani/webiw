import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- ajouter
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/webiw">  
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
