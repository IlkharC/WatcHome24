import PATH from "./constants";
import MainLayout from "@/layout/main-layout";
import Home from "@/pages/home/home";

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
    }
]