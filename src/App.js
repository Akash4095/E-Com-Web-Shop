import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import Navbar from './components/navbar/navbar';
import Products from './components/products/products';

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data)
    }

    const fetchCart = async () => {
        const response = await commerce.cart.retrieve()
        setCart(response)
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log(products)
    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App;