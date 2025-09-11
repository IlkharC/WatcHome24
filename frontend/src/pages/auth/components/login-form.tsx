import type { ChangeEvent } from "react";

interface LoginFormProps {
    formData: {
        email: string
        password: string
    }
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void 
    errors: {
        email?: string
        password?: string
    }
    formError?: string
    successMessage?: string
}

export default function LoginForm({
    formData,
    onInputChange,
    onSubmit,
    errors,
    formError,
    successMessage
}: LoginFormProps)
{
    return (
        <div className="login-form">
            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }} className="form-container">

                {/* Form Error */}
                { formError && <p className="form-error">{formError}</p> }
                
                {/* Success Message */}
                { successMessage && <p className="form-success">{successMessage}</p> }

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    placeholder="Email"
                    required
                />
                { errors.email && <p className="field-error">{errors.email}</p> }

                {/* Password */}
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onInputChange}
                    placeholder="********"
                    required 
                />
                { errors.password && <p className="field-error">{errors.password}</p> }

                {/* Submit */}
                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
}