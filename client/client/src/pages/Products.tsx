import FilterPanel from '@/components/FilterPanel'
import React, { useState } from 'react'
import { Await, useLoaderData, useSearchParams } from 'react-router-dom'
import { Suspense, } from 'react'
import { GetProductsInterface, ProductInterface } from '@/services/api/product'
import { Plus } from 'lucide-react'
import { tryAddToCart } from '@/services/api/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import Swal from 'sweetalert2'
import { addToCart } from '@/store/slices/cartSlice'
import Pagination from '@/components/Pagination'
import { useCart } from '@/contexts/CartContext'

interface ProductsLoaderData {
    productsResponse: Promise<GetProductsInterface>;
}

const Products: React.FC = () => {
    const loader = useLoaderData() as ProductsLoaderData;
    const token = useSelector((state: RootState) => state.auth.token)
    const cart = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    const { addItem } = useCart();
    const [searchParams, setSearchparams] = useSearchParams()
    const currentPage = searchParams.get('page') || '1'
    const [pageSize, setPageSize] = useState<string>(searchParams.get('pageSize') || '10')
    const pageSizeOptions = ["1", "10", "15", "20", "40"]

    const handleAddToCart = async (product: ProductInterface) => {
        try {
            const response = await tryAddToCart(token, product.id)

            if (response.status === 201) {
                dispatch(addToCart({
                    id: response.cartId,
                    productId: product.id,
                    name: product.title,
                    price: product.salePrice || product.price,
                    image: product.image,
                    quantity: 1
                }))

                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'success',
                    title: 'Added to cart!',
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

    const changePageSize = (value: string) => {
        setPageSize(value)
        searchParams.set('page', '1')
        searchParams.set('pageSize', value)

        setSearchparams(searchParams)
    }

    return (
        <div className='min-h-screen bg-gray-50'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Products</h1>
                    <p className='text-gray-600'>Choose your product</p>
                </div>

                <div className='flex items-center gap-2 mb-4'>
                    <label className='text-sm text-gray-600'>Page:</label>
                    <select
                        value={pageSize}
                        onChange={(e) => changePageSize(e.target.value)}
                        className='border rounded px-2 py-1 bg-white'
                    >
                        {pageSizeOptions.map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-1 gap-8'>
                    <div className="lg:col-span-1">
                        <FilterPanel />
                    </div>
                </div>

                <div className='lg:col-span-3 mt-10'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Await resolve={loader.productsResponse}>
                            {(productsResponse: GetProductsInterface) => (
                                <>
                                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                                        {productsResponse.products.map((product) => {
                                            // const isAdded = cartItems.includes(product.id)
                                            const foundItem = cart.items.find(cartItem => cartItem.productId === product.id)
                                            const count = foundItem?.quantity || 0

                                            return (
                                                <div key={product.id} className='group  relative transition border mt-16 p-4 rounded shadow bg-white'>
                                                    <img src={product.image} alt="" className='h-96' />
                                                    <h2 className='text-lg font-bold'>{product.title}</h2>
                                                    <p className='text-gray-600'>{product.description}</p>
                                                    <p className='font-semibold'>Price: {product.price}$</p>
                                                    <p className='text-sm text-gray-500'>Category: {product.category_name}</p>

                                                    <button
                                                        onClick={() => handleAddToCart(product)}
                                                        className={`absolute top-4 right-4 transition p-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full shadow ${count === 0 && 'opacity-0 group-hover:opacity-100'}`}
                                                    >
                                                        <Plus size={18} onClick={addItem} />
                                                        {count > 0 && (
                                                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full'>
                                                                {count}
                                                            </span>
                                                        )}
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <Pagination
                                        page={+currentPage}
                                        pageSize={+pageSize}
                                        totalProducts={+productsResponse.total}
                                    />
                                </>
                            )}
                        </Await>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default Products