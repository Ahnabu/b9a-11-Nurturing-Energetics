import Error from "../Error/Error";
import AddFood from "../Pages/AddFood/AddFood";
import AllFoods from "../Pages/AllFoods/AllFoods";
import Gallery from "../Pages/Gallery/Gallery";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Layout from "../Pages/Layout/Layout";
import MyFood from "../Pages/MyFood/MyFood";
import MyOrder from "../Pages/MyOrder/MyOrder";
import LogIn from "../UserManagement/Login";
import Register from "../UserManagement/Register";

import { createBrowserRouter } from "react-router-dom";
import Purchase from "../Pages/Purchase/Purchase";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
      
            errorElement:<Error/>,
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
            {
                path: "/my-food",
                element: <MyFood></MyFood>,
            },
            {
                path: "/my-ordered",
                element: <MyOrder></MyOrder>,
            },
            {
                path: "/add",
                element: <AddFood></AddFood>,
            },
            {
                path: "/all",
                element: <AllFoods></AllFoods>,
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>,
            },
            {
                path: "/purchase/:id",
                element:<PrivetRoute><Purchase></Purchase> </PrivetRoute> ,
            },
            {
                path: "/details/:id",
                element: <Details></Details>,
        
            },
        ]
    },
]);
