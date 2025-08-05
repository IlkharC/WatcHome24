import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import { useAuth } from "@/store/use-auth";

export default function MainLayout()
{
    const { isAuthenticated, logout } = useAuth()

    return (
        <>
            <Navbar
                isAuthenticated={isAuthenticated}
                onLogout={logout}
            />
            <Outlet/>
        </>
    );
}