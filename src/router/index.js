
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Main from "../pages/main"
import User from "../pages/user";
import Mall from "../pages/mall";
import Home from "../pages/home";

const Routes = [
    {
        path: '/',
        Component: Main,
        children: [
            // 重定向
            {
                path: '/',
                element: <Navigate to="home" replace />
            },
            {
                path: 'user',
                Component: User
            },
            {
                path: 'mall',
                Component: Mall
            },
            {
                path: 'home',
                Component: Home
            }
        ]
    }
]
export default createBrowserRouter(Routes);