import axios from "axios"

export const tryGetCartItems = async (token: string) => {
    try {
        const response = await axios.get(`http://localhost:3000/cart`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    } catch (err) {
        throw new Error("Failed to get products from cart")
    }
}

export const tryAddToCart = async (token: string, productId: string) => {
    try {
        const response = await axios.post('http://localhost:3000/cart', {product_id: productId}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return {
            cartId: response.data.id,
            status: response.status
        }
    } catch (err) {
        throw new Error("Failed to add product to cart")
    }
}

export const tryDeleteCartItem = async (token: string, cartId: string) => {
    try {
        const response = await axios.delete(`http://localhost:3000/cart/${cartId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.status
    } catch (err) {
        throw new Error("Failed to delete product from cart")
    }
}

export const tryClearCart = async (token: string) => {
    try {
        const response = await axios.post(`http://localhost:3000/cart/clear`, null , {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.status
    } catch (err) {
        throw new Error("Failed to clear cart")
    }
}

