import AuthLayout from "@/layout/auth-layout";
import PATH from "./constants";
import MainLayout from "@/layout/main-layout";
import Home from "@/pages/home/home";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";

export const Routes = [
    {
        path: PATH.home,
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    },
    {
        element: <AuthLayout/>,
        children: [
            {
                path: "/auth/login",
                element: <Login/>
            },
            {
                path: "/auth/register",
                element: <Register/>
            }
        ]
    }
]