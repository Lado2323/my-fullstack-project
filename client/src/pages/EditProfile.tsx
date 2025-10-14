import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { tryUpdatingUser } from '@/services/api/user'
import { RootState } from '@/store'
import { updateProfile } from '@/store/slices/authSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const EditProfile = () => {
    const user = useSelector((state: RootState) => state.auth.user) 
    const token = useSelector((state: RootState) => state.auth.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        first_name: user?.first_name || "",
        last_name: user?.last_name || "",
        phone_number: user?.phone_number || ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await tryUpdatingUser(token, formData)
            dispatch(updateProfile(response)) 

            setTimeout(() => {
                navigate('/profile')
            }, 2000)

            Swal.fire({
                title: "Profile was updated",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            })
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    return (
        <div className="min-h-screen bg-muted/40 flex items-center justify-center px-4">
            <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-serif font-bold mb-6 text-cetner">Profile correction</h1>
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <label htmlFor="first_name" className='block mb-2 font-medium'>Name</label>
                        <Input
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="last_name" className='block mb-2 font-medium'>Surname</label>
                        <Input
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone_number" className='block mb-2 font-medium'>Phone number</label>
                        <Input
                            id="phone_number"
                            name="phone_number"
                            value={formData.phone_number}
                            onChange={handleChange}
                        />
                    </div>

                    <Button type="submit" className='w-full' variant='primary'>Update</Button>
                </form>
            </div>
        </div>
    )
}

export default EditProfile