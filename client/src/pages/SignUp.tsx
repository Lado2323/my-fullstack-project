import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { trySignUp } from "@/services/api/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { Input } from "@/components/ui/input";
import { SunMedium } from "lucide-react";

const SignUp = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: ""
    });
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { theme, toggleTheme } = useContext(ThemeContext)
    const navigate = useNavigate()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const status = await trySignUp(formData)
            if (status === 201) {
                Swal.fire({
                    title: "Good job!",
                    text: "You signed up succesfully!",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });

                setTimeout(() => {
                    navigate('/')
                }, 2000)
            }
        } catch (err: any) {
            console.error("Signup failed:", err.response?.data || err.message);
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div
            className={`w-full h-screen p-5 
            ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} 
            "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}
        >
            {/* Your content */}


            <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="text-center">
                    <Link to='/'>
                        <img
                            src={theme === 'light'
                                ? 'https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/logo-dark.svg'
                                : 'https://startersites.io/blocksy/petsy/wp-content/uploads/2021/11/logo-light.svg'}
                            alt="Logo"
                            className="h-12 mx-auto"
                        />
                    </Link>
                    <p className="mt-6 text-2xl italic text-gray-400">
                        Registration
                    </p>
                </div>

                <form className={`mt-8 space-y-6 ${theme === 'light' ? 'text-black' : 'text-white'}`} onSubmit={handleSubmit}>
                    <div>

                        <Input
                            placeholder="Enter your Name:"
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}

                            required
                            autoComplete="email"
                        />
                    </div>
                    <div>

                        <Input
                            placeholder="Enter your Surname:"
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div>

                        <Input
                            placeholder="Enter your Email:"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />
                    </div>
                    <div>

                        <Input
                            placeholder="Enter your Password:"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />


                        {formData.password && formData.password.length < 8 && (
                            <p className="text-red-600 text-sm mt-1">
                                Password must be at least 8 characters
                            </p>
                        )}







                    </div>
                    <div>

                        <Input
                            placeholder="Phone_number:"
                            type="number"
                            id="phone-number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />

                         {formData.phone_number && formData.phone_number.length != 9 && (
                            <p className="text-red-600 text-sm mt-1">
                                Phone number must include at least 7 digits
                            </p>
                        )}







                    </div>


                    {error && <p className="text-red-600 text-md">{error}</p>}

                    <Button

                        type="submit"
                        className="w-full text-lg"
                        size={"lg"}
                        variant={"primary"}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Sign Up"}
                    </Button>
                </form>
                <p className="text-md  text-gray-400 mt-4 text-center">
                    Already have Account?{" "}
                    <Link to="/signin" className="font-medium text-primary-600 hover:underline ms-1">
                        Sign In
                    </Link>
                </p>
                <SunMedium

                    className='btn btn-warning absolute top-4 right-16 h-12 cursor-pointer '
                    color={theme === 'light' ? undefined : '#ffffff'}
                    onClick={toggleTheme}>Toggle Theme

                </SunMedium>

            </div>
        </div>
    );
};

export default SignUp;
