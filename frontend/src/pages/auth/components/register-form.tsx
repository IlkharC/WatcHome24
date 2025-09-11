import type { ChangeEvent } from "react"

interface RegisterFormProps {
    formData: {
        name: string
        email: string
        password: string
        confirmPassword: string
        notification: boolean
    }
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
    onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
    errors: {
        name?: string
        email?: string
        password?: string
        confirmPassword?: string
    }
    formError?: string
    successMessage?: string
}

export default function RegisterForm({
    formData,
    onInputChange,
    onCheckboxChange,
    onSubmit,
    errors,
    formError,
    successMessage
}: RegisterFormProps)
{
    return (
        <div className="register-form">
            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }} className="form-container">

                {/* Form Error */}
                {formError && <p className="form-error">{formError}</p>}

                {/* Success Message */}
                {successMessage && <p className="form-success">{successMessage}</p>}

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    placeholder="Name"
                    required
                />
                {errors.name && <p className="field-error">{errors.name}</p>}

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    placeholder="Email"
                    required
                />
                {errors.email && <p className="field-error">{errors.email}</p>}

                {/* Password */}
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={onInputChange}
                    placeholder="********"
                    required
                />
                {errors.password && <p className="field-error">{errors.password}</p>}

                {/* Confirm Password */}
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={onInputChange}
                    placeholder="********"
                    required
                />
                {errors.confirmPassword && <p className="field-error">{errors.confirmPassword}</p>}

                {/* Notification */}
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        name="notification"
                        checked={formData.notification}
                        onChange={onCheckboxChange}
                    />
                    Receive email notifications
                </label>

                {/* Submit */}
                <button type="submit">
                    Register
                </button>

            </form>
        </div>
    );
}