import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from './routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='container mx-auto'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);