import { Outlet } from "react-router-dom";
import Navbar from "./navbar/navbar";
import { useAuthStore } from "@/store/useAuthStore";

export default function MainLayout()
{
    const { isAuthenticated, logout } = useAuthStore()

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