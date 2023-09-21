import { useEffect, useState } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import { ProductCard } from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'

export const Products = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetchProducts('iphone').then((response: any) => {
            setProducts(response)
            setLoading(false)
        }).catch((err: any) => {
            console.log(err)
        });
    }, [])
    console.log(products)

    return (
        <>
            {loading ?
                <Loading />
                :
                <section className="products container">
                    {products.map((product) => <ProductCard data={product} />)}
                </section>
            }
        </>

    )
}