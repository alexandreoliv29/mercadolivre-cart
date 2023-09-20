import { useEffect, useState } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import { ProductCard } from '../ProductCard/ProductCard'

export const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts('iphone').then((response: any) => {
            setProducts(response)
        }).catch((err: any) => {
            console.log(err)
        });
    }, [])

    return (
        <section className="products container">
            {
                products.map((product) => <ProductCard data={product} />)
            }
        </section>
    )
}