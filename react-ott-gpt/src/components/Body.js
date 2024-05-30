import React, { useContext, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import { AuthContext } from '../context/authContext';
import { onAuthStateChanged } from "firebase/auth";
import  { auth } from '../utils/firebase';

function Body() {
    const { authDetail, setAuthDetail } = useContext(AuthContext);

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

    // Logic to store the user detail after login and clear user detail on logout
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // const {uid, email, displayName } = user;
            setAuthDetail(user)
          } else {
            // User is signed out
            setAuthDetail([])
          }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appRoutes}/>
        </div>
    );
}

export default Body;