import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

function Body(props) {

    const appRoutes = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])
    return (
        <div>
            <RouterProvider router={appRoutes}/>
        </div>
    );
}

export default Body;