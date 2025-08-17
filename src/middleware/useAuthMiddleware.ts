import { useAuthStore } from "@/store/useAuthStore";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useAuthMiddleware() {
    const { login, logout } = useAuthStore()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const loginData = localStorage.getItem("currentUser")

        if (loginData) {
            try {
                const parsedData = JSON.parse(loginData)

                if (parsedData) {
                    login({
                        name: parsedData.name,
                        email: parsedData.email,
                        loginTime: parsedData.loginTime
                    })
                } else {
                    logout()
                    navigate("/auth/login")
                }
            } catch (error) {
                logout()
                navigate("/auth/login")
            }
        } else {
            logout()
            navigate("auth/login")
        }
    }, [location.pathname])
}