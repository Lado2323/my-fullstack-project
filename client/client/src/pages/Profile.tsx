import { Button } from '@/components/ui/button'
import { RootState } from '@/store'
import { logout } from '@/store/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Profile = () => {
    const user = useSelector((state: RootState) => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(logout())
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Log out successfully!',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            background: '#f0fdf4',
            color: '#15803d'
        })
        navigate('/')
    }

    return (
        <div className='min-h-screen bg-muted/40 flex items-center justify-center px-4'>
            <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-serif font-bold mb-6 italic color font-bold text-center">My profile</h1>

                {user ? (
                    <div className='space-y-4 '>
                        <div className='flex gap-4'>
                            <p className='text-xl font'>Name:</p>
                            <p className=' text-xl text-gray-700 italic font-bold'>{user.first_name}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-xl font'>Surname:</p>
                            <p className='text-xl text-gray-700 italic font-bold'>{user.last_name}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-xl font'>E-mail:</p>
                            <p className='text-xl text-gray-700 italic font-bold'>{user.email}</p>
                        </div>
                        <div className='flex gap-4'>
                            <p className='text-xl font'>Phone_Number:</p>
                            <p className='text-xl text-gray-700 italic font-bold'>{user.phone_number}</p>
                        </div>

                        <div> 
                            
                            <Button className="w-full mt-8 " variant='primary'>
                                <Link to="/edit-profile" className='text-lg'>Profile correction </Link>
                            </Button>

                       

                            <Button className="w-full mt-6 text-lg " onClick={handleLogOut} variant='primary'>
                                Log out
                            </Button>
                        </div>



                       
                    </div>
                ) : (
                    <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
                )}


            </div>
        </div>
    )
}

export default Profile