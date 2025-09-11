import AuthLayout from "@/layout/auth-layout";
import PATH from "./constants";
import MainLayout from "@/layout/main-layout";
import Home from "@/pages/home/home";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import Shop from "@/pages/shop/shop";
import ProductDetail from "@/pages/product-detail/product-detail";
import Cart from "@/pages/cart/cart";

export const Routes = [
    {
        path: PATH.home,
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/products/:slug",
                element: <ProductDetail/>
            },
            {
                path: "/cart",
                element: <Cart/>
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