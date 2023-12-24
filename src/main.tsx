import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { appRoutes } from '@constants/app-routes';

import './index.css';

const router = createBrowserRouter(appRoutes);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
);
