import { Button } from '@/components/ui/button';
import { RootState } from '@/store';
import { clearCart } from '@/store/slices/cartSlice';
import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Checkout: React.FC = () => {
    const token = useSelector((state: RootState) => state.auth.token)
    const cart = useSelector((state: RootState) => state.cart)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBuy = async () => {
        try {
            const response = await axios.post('http://localhost:3000/purchases',
                {
                    totalPrice: cart.total,
                    totalItems: cart.itemCount
                }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if (response.status === 201) {
                dispatch(clearCart())
                navigate('/')
            }
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Payment error try later!',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                background: '#f0fdf4',
                color: '#801515ff'
            })








        } catch (err) {
            console.log('Error: ', err);
        }
    }

    return (
        <div className='min-h-screen bg-muted/40 flex items-center justify-center px-4'>
            <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font italic font-bold mb-6 text-center">Payment</h1>

                <div className=' p-6 rounded'>
                    <h2 className="text-xl color font-semibold mb-4">Details</h2>
                    <p className="text-gray-400 mb-2">
                        Total items: <span className="font-bold font">{cart.itemCount}</span>
                    </p>
                    <p className="text-gray-400 mb-4">
                        Total payment: <span className="font-bold font">{cart.total}$</span>
                    </p>
                    <Button onClick={handleBuy} className='w-full mt-4 bg-green-400 italic text-xl hover:bg-green-500'>
                        Pay
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Checkout