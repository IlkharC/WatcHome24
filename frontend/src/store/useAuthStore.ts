import type { AuthUser } from "@/types/user";
import { create } from "zustand";

interface AuthState {
    isAuthenticated: boolean;
    user: AuthUser | null;
    login: (user: AuthUser) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,

    login: (user) => {
        localStorage.setItem("currentUser", JSON.stringify(user))
        set({ isAuthenticated: true, user })   
    },

    logout: () => {
        localStorage.removeItem("currentUser")
        set({ isAuthenticated: false, user: null })
    }
}))