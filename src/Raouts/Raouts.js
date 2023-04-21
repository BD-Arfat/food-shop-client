import { createBrowserRouter } from "react-router-dom";
import MainLaouts from "../Share/Laouts/MainLaouts/MainLaouts";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Service from "../Pages/Service/Service";
import LoginLaouts from "../Share/Laouts/LoginLaouts/LoginLaouts";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivetRouts from "./PrivetRouts/PrivetRouts";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import MyReview from "../Pages/MyReview/MyReview";
import AddServices from "../Pages/AddService/AddServices";

export const routs = createBrowserRouter([
    {
        path: '/',
        element: <MainLaouts />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/service',
                element: <PrivetRouts><Service /></PrivetRouts>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivetRouts><ServiceDetails/></PrivetRouts>,
                loader: ({params})=>fetch(`http://localhost:5500/food/${params.id}`)
            }
        ]
    },
    {
        path : "/loginLaouts",
        element: <LoginLaouts/>,
        children : [
            {
                path: '/loginLaouts/register',
                element: <Register/>
            },
            {
                path: '/loginLaouts/login',
                element: <Login/>
            },
            {
                path: '/loginLaouts/myReview',
                element: <MyReview/>,
            },
            {
                path: '/loginLaouts/addService',
                element: <AddServices/>,
            }
        ]
    }
])