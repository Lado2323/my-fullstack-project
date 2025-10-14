import CartItem from '@/components/CartItem'
import { Button } from '@/components/ui/button'
import { tryAddToCart, tryClearCart, tryDeleteCartItem } from '@/services/api/cart'
import { RootState } from '@/store'
import { clearCart, incrementCartProduct, removeFromCart } from '@/store/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useCart } from '@/contexts/CartContext'

const Cart = () => {
    const token = useSelector((state: RootState) => state.auth.token)
    const cart = useSelector((state: RootState) => state.cart)
    const { itemCount, clearAllCart } = useCart();
     const { addItem, removeItem } = useCart();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleDelete = async (id: string) => {
        dispatch(removeFromCart(id))
        try {
            const status = await tryDeleteCartItem(token, id)

            if (status === 200) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Deleted from cart!',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    background: '#f0fdf4',
                    color: '#15803d'
                })
            }
            removeItem()

        } catch (err) {
            console.log("Error: ", err);
        }
    }

    const handleAdd = async (cartId: string, productId: string) => {
        dispatch(incrementCartProduct(cartId))
        try {
            const response = await tryAddToCart(token, productId)

            if (response.status === 201) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added in cart!',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    background: '#f0fdf4',
                    color: '#15803d'
                })
            }
            addItem()
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    const handleClear = async () => {
        dispatch(clearCart())
        try {
            const status = await tryClearCart(token)
            if (status === 201) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cart was cleared!',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                    background: '#f0fdf4',
                    color: '#15803d'
                })
            }
        } catch (err) {
            console.log("Error: ", err);
        }
    }

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='min-h-screen bg-muted/40 px-4 py-10'>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl color font-bold mb-8 italic text-center">My Cart</h1>

                {cart.items.length === 0 ? (
                    <p className='text-center font-bold text-xl text-gray-500 '>Cart is empty</p>
                ) : (
                    <>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            <div className='lg:col-span-2 space-y-4'>
                                {cart.items.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        
                                    
                                        handleDelete={() => handleDelete(item.id)}
                                        handleAdd={() => handleAdd(item.id, item.productId)}
                                    />
                                ))}
                            </div>

                            <div className='bg-white p-6 rounded shadow h-fit'>
                                <h2 className="text-xl font-semibold mb-4">Cart total</h2>
                                <p className="text-gray-700 mb-2">
                                    Total items: <span className="font-bold">{cart.itemCount}</span>
                                </p>
                                <p className="text-gray-700 mb-4">
                                    Total payment: <span className="font-bold">{cart.total}$</span>
                                </p>
                                <Button onClick={()=> {clearAllCart(); handleClear();}} className='w-full bg hover:bg-red-500 mb-4'>
                                    Empty cart
                                </Button>

                                <Button   className='w-full bg-green-300 hover:bg-green-400' onClick={()=> {handleCheckout();clearAllCart();}}>
                                    Pay
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>

        </div>
    )
}

export default Cart