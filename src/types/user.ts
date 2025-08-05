export interface User {
    id: number,
    name: string,
    email: string,
    password: string,
    notification: boolean,
    registeredAt: string
}

export interface AuthUser {
    name: string
    email: string
    loginTime: string
}

export interface RegisterUser {
    name: string
    email: string 
    password: string
    confirmPassword: string
    notification: boolean
}

