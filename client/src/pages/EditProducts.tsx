import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { tryGettingProducts, tryUpdateProduct } from '@/services/api/product'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const EditProducts = () => {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: 0,
        image: ""
    })

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await tryGettingProducts()
                setProducts(response.products)
            } catch (err) {
                console.log("Error: ", err)
            }
        }

        fetchProducts()
    }, [])


    const hanldeSelect = (product) => {
        setSelectedProduct(product)
        setFormData({
            title: product.title,
            description: product.description,
            price: product.price,
            image: ""
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({ ...prev, [name]: type === "number" ? +value : value }))
    }

    const hanldeSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedProduct) return

        try {
            const status = await tryUpdateProduct(selectedProduct.id, formData)
            console.log(status);

            if (status === 200) {
                const updatedProducts = await tryGettingProducts()
                setProducts(updatedProducts.products)
                setSelectedProduct(null)
                setFormData({ title: "", description: "", price: 0, image: "" })

                Swal.fire({
                    title: "Congratulations!",
                    text: "The product was sucessfully updated!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
            }
        } catch (err) {
            console.log("Error: ", err)
        }
    }

    return (
        <div className='min-h-screen bg-muted/40 px-4 py-10'>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-serif font-bold mb-8 text-center">Admin panel - correction of product</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className="bg-background p-4 rounded shadow overflow-y-auto max-h-[600px]">
                        <h2 className="text-lg font-medium mb-4">All products</h2>
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className='border p-3 mb-2 rounded hover:bg-muted cursor-pointer transition'
                                onClick={() => hanldeSelect(product)}
                            >
                                <p className='font-medium'>{product.title}</p>
                                <p className='text-sm text-muted-foreground'>Price: {product.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className='md:col-span-2 bg-background p-6 rounded shadow'>
                        {selectedProduct ? (
                            <>
                                <h2 className="text-xl font-bold mb-4">Correction of product</h2>

                                <form onSubmit={hanldeSubmit} className='space-y-4'>
                                    <Input
                                        name="title"
                                        placeholder='Title'
                                        value={formData.title}
                                        onChange={handleChange}
                                    />

                                    <Textarea
                                        name="description"
                                        placeholder='Description'
                                        value={formData.description}
                                        onChange={handleChange}
                                    />

                                    <Input
                                        type="number"
                                        name="price"
                                        placeholder='Price'
                                        value={formData.price}
                                        onChange={handleChange}
                                    />

                                    <Button type="submit" className="w-full">Update</Button>
                                </form>
                            </>
                        ) : (
                            <>
                                <p className='text-center text-muted-foreground'>Choose product from list</p>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditProducts