import React from 'react'
import { type CartItem } from '@/store/slices/cartSlice';
import { Minus, Plus } from 'lucide-react';

interface CartItemPropsInterface {
    item: CartItem;
    handleDelete: () => void;
    handleAdd: () => void;
}

const CartItem: React.FC<CartItemPropsInterface> = (props) => {
    const { item, handleDelete, handleAdd } = props

    return (
        <div className='relative group border p-4 rounded shadow bg-white'>
            <h2 className="text-lg font-bold">{item.name}</h2>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <p className="font-semibold">Price: {item.price}$</p>
            <button
                onClick={handleAdd}
                className='absolute top-3 right-4 p-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full shadow'
            >
                <Plus size={18} />
            </button>

            <button
                onClick={handleDelete}
                className='absolute bottom-3 right-4 p-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-full shadow'
            >
                <Minus size={18} />
            </button>
        </div>
    )
}

export default CartItem