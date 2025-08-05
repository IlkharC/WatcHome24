import type { RegisterUser, User } from "@/types/user";
import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./components/register-form";

interface FormErrors {
    name?: string
    email?: string
    password?: string
    confirmPassword?: string
}

export default function Register()
{
    const navigate = useNavigate()

    const [ formData, setFormData ] = useState<RegisterUser>({
        name: "",
        email: "", 
        password: "",
        confirmPassword: "",
        notification: false
    })

    const [ errors, setErrors ] = useState<FormErrors>({})
    
    const [ formError, setFormError ] = useState("")
    const [ successMessage, setSuccessMessage ] = useState("")

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {}

        if (!formData.name) {
            newErrors.name = "Enter Name"
        }
        else if (formData.name.length < 2) {
            newErrors.name = "Enter your name correctly"
        }

        if (!formData.email) {
            newErrors.email = "Enter Email"
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a real email address"
        }

        if (!formData.password) {
            newErrors.password = "Enter Password"
        }
        else if (formData.password.length < 6) {
            newErrors.password = "Min 6 symbol"
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Enter the password again" 
        }
        else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "The passwords are not the same"
        }

        return newErrors
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: checked
        }))
    }

    const handleSubmit = () => {

        const validationErrors = validateForm()

        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors)
            setFormError("")
            setSuccessMessage("")
            return
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]")

        const existingUser = users.find((user: User) => user.email === formData.email)

        if (existingUser) {
            setFormError("An account with this email already exists.")
            setSuccessMessage("")
            return
        }

        const newUser = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            password: formData.password,
            notification: formData.notification,
            registeredAt: new Date().toISOString()
        }

        users.push(newUser) 
        localStorage.setItem("users", JSON.stringify(users))
        
        setSuccessMessage("Registration successful!")
        setFormError("")
        setErrors({
            name: "",
            email: "", 
            password: "",
            confirmPassword: "",
        })

        setTimeout(() => {
            navigate("/auth/login")
        }, 2000)
    }

    return (
        <RegisterForm
            formData={formData}
            onInputChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
            onSubmit={handleSubmit}
            errors={errors}
            formError={formError}
            successMessage={successMessage}
        />
    );
}