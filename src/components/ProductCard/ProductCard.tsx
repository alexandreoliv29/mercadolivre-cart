import { formatCurrency } from '../../utils/formatCurrency'
import './ProductCard.css'
import propTypes from 'prop-types'

export const ProductCard = ({ data }: any) => {

    const { title, thumbnail, price } = data

    return (
        <section className="product-card">
            <div className="card__infos">
                <img
                    src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product"
                    className="card_image" />
                <h2 className="card__price">{formatCurrency(price)}</h2>
                <h2 className="card__title">{title}</h2>
            </div>
            <button type="button" className="button__add-cart">+</button>
        </section>
    )
}

ProductCard.propTypes = {
    data: propTypes.shape({}),
}