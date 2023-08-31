import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Dashboard from "../layout/Dashboard";
import Home from "../pages/main/Home/Home";
import DashboardHome from "../pages/dashboard/DashboardHome/DashboardHome";
import About from "../pages/main/About/About";
import AddProduct from "../pages/dashboard/AddProduct/AddProduct";
import Login from "../pages/shared/Login/Login";
import Register from "../pages/shared/Register/Register";
import NewOrder from "../pages/dashboard/NewOrder/NewOrder";
import PrivetRoute from "./PrivetRoute";
import Specifications from "../pages/dashboard/specifications/Specifications";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivetRoute><Dashboard /></PrivetRoute>,
        children: [
            {
                path: '/dashboard',
                element: <DashboardHome />
            },
            {
                path: 'add_product',
                element: <AddProduct />
            },

            {
                path: "new_order",
                element: <Specifications />
            },

        ]
    }
])

export default router