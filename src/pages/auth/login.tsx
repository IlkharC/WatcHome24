import { useAuth } from "@/store/use-auth";
import type { User } from "@/types/user";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/login-form";

export default function Login()
{
    const navigate = useNavigate()
    const { login } = useAuth()

    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    })

    const [ errors, setErrors ] = useState({
        email: "",
        password: ""
    })
    
    const [ formError, setFormError ] = useState("")
    const [ successMessage, setSuccessMessage ] = useState("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {

        let hasError = false;

        if (!formData.email.includes("@")) {
            setErrors((prev) => ({
                ...prev,
                email: "Please enter a valid email."
            }))
            hasError = true
        }

        if (formData.password.length < 6) {
            setErrors((prev) => ({
                ...prev,
                password: "Password must be at least 6 characters."
            }))
            hasError = true
        }

        if (hasError) {
            setFormError("")
            setSuccessMessage("")
            return
        }

        const usersData = JSON.parse(localStorage.getItem("users") || "[]")
        const matchedUser = usersData.find(
            (user: User) => user.email === formData.email && user.password === formData.password
        )

        if (matchedUser) {
            login({
                name: matchedUser.name,
                email: matchedUser.email,
                loginTime: new Date().toISOString()
            })
            
            setSuccessMessage("Login successful!")
            setFormError("")
            setErrors({
                email: "",
                password: ""
            })

            setTimeout(() => {
                navigate("/")
            }, 2000)
        } 
        else {
            setFormError("Invalid email or password.")
            setSuccessMessage("")
            setErrors({
                email: "",
                password: ""
            })
        }
    }

    return (
        <LoginForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            errors={errors}
            formError={formError}
            successMessage={successMessage}
        />
    );
}