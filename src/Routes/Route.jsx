import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import LogIn from "../UserManagment/Login";
import Register from "../UserManagment/Registation";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
        
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]
    },
]);
