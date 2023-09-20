import './ProductCard.css'


export const ProductCard = () => {
    return (
        <section className="product-card">
            <img src="http://http2.mlstatic.com/D_932360-MLA46545868431_062021-W.jpg" alt="product" className="card_image" />

            <div className="card_infos">
                <h2 className="card_prices">R$ 200,20</h2>
                <h2 className="card_title">Manual do dev</h2>
            </div>
            <button type="button" className="button_add_cart">+</button>
        </section>
    )
}