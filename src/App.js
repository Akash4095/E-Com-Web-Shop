import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import Navbar from './components/Navbar/navbar';
import Products from './components/Products/products';
import Cart from './components/Cart/cart'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const response = await commerce.cart.add(productId, quantity)

        setCart(response.cart)
        console.log(response,'--response')
    }
    console.log(cart, '--cart')
    // console.log(products)
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, [])

    return (
        <div>
            <Navbar totalItems={cart ? cart.total_items : ""} />
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            <Cart cart={cart} />
        </div>
    )
}

export default App;