import { createBrowserRouter, } from "react-router-dom";
import Home from "../Pages/Home/Home";
import SingInLayout from "../Pages/Registration/SingInLayout";
import DashboardLayout from "../Dashboard/DashboardLayout/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import { PrivateRoute, CompanyRoute } from "./PrivateRoute";
import Developers from "../Pages/Developers/Developers";
import Details from "../Pages/DetailsPage/Details";
import Companies from "../Pages/Companies/Companies ";
import PostJobCircular from "../Dashboard/DashboardPage/PostJobCircular";
import OurCompanyJobCircular from "../Dashboard/DashboardPage/OurCompanyJobCircular";
import CircularDetails from "../Dashboard/DashboardPage/CircularDetails";
import CircularUpdate from "../Dashboard/DashboardPage/CircularUpdate";
import Circulars from "../Pages/Circulars/Circulars";
import Candidates from "../Dashboard/DashboardPage/Candidates";
import Inbox from "../Dashboard/DashboardPage/Inbox";
import Messages from "../Dashboard/DashboardPage/Messages";



export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/profile',
        element:
            <PrivateRoute>
                <Profile />
            </PrivateRoute>
    },
    {
        path: '/updateProfile',
        element:
            <PrivateRoute>
                <UpdateProfile />
            </PrivateRoute>
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/developers',
        element: <PrivateRoute> <Developers /></PrivateRoute>
    },
    {
        path: '/companies',
        element: <PrivateRoute><Companies /></PrivateRoute>
    },
    {
        path: '/circulars',
        element: <PrivateRoute> <Circulars /></PrivateRoute>,
        children: [
            {
                path: '/circulars/circularDetails/:id',
                element: <CircularDetails />

            },
        ]

    },
    {
        path: '/details/:id',
        element: <Details />
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout />  </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />

            },
            {
                path: '/dashboard/postJobCircular',
                element: <CompanyRoute><PostJobCircular />
                </CompanyRoute>
            },
            {
                path: '/dashboard/ourCompanyJobCircular',
                element: <CompanyRoute> <OurCompanyJobCircular /></CompanyRoute>

            },
            {
                path: '/dashboard/inbox/:id',
                element: <Inbox />,
                children: [
                    {
                        path: '/dashboard/inbox/:id',
                        element: <Messages />
                    }
                ]

            },
            {
                path: '/dashboard/circularDetails/:id',
                element: <CircularDetails />

            },
            {
                path: '/dashboard/candidates/:id',
                element: <Candidates />

            },
            {
                path: '/dashboard/circularUpdate/:id',
                element: <CircularUpdate />

            },
        ]



    },
    {
        path: '/login',
        element: <SingInLayout />
    },
])