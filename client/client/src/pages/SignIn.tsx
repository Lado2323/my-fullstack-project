import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { tryLogin } from "@/services/api/auth";
import { tryFetchingUser } from "@/services/api/user";
import { useDispatch, UseDispatch } from "react-redux";
import { loginSuccess } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { SunMedium } from "lucide-react";
import { Input } from "@/components/ui/input";






const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const{theme,toggleTheme} = useContext(ThemeContext)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await tryLogin(formData)
            const currentUser = await tryFetchingUser(data.access_token)

            const user = {
                id: currentUser.id,
                email: currentUser.email,
                first_name: currentUser.first_name,
                last_name: currentUser.last_name,
                phone_number: currentUser.phone_number
            }
            dispatch(loginSuccess({ user, token: data.access_token }))

            setTimeout(() => {
                navigate('/')
            }, 1500)

            Swal.fire({
                title: "Congratulations!",
                text: "You've  successfully entered!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            });            
        } catch (err) {
            setError(err.message)
            console.log(err)
        }
    };

    return (
       <div className={`w-full h-screen p-5 
            ${theme === 'light' ? 'bg-white' : 'bg-gray-900'} 
            "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-md w-full space-y-8">
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
                    <p className="mt-10 text-xl italic text-gray-400">
                        Welcome back to Petsy
                    </p>
                </div>

                <form className={`mt-8 space-y-6 ${theme === 'light' ? 'text-black' : 'text-white'}`} onSubmit={handleSubmit}>
                   

                        <Input
                            placeholder="Enter your email:"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                       
                            required
                            autoComplete="email"
                        />
                   
                 

                        <Input
                            placeholder="Enter your password:"
                            name="password"
                            type="password"
                            value={formData.password}
                            
                            onChange={handleChange}
                           
                            required
                            autoComplete="current-password"
                        />
                    

                    {error && (
                        <p className="text-sm text-red-500 text-center">
                            {error}
                        </p>
                    )}

                    <Button
                        type="submit"
                        className="w-full text-lg"
                        size={"lg"}
                        variant={"primary"}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Log In"}
                    </Button>

                    <div className="text-center">
                        <p className="text-gray-400">
                            Don't have an Account?
                            <Link
                                to="/signup"
                                className="font-medium text-primary-600 hover:underline ms-1"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                    <SunMedium

                        className='btn btn-warning absolute top-4 right-16 h-12 cursor-pointer '
                        color={theme === 'light' ? undefined : '#ffffff'}
                        onClick={toggleTheme}>Toggle Theme

                    </SunMedium>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
