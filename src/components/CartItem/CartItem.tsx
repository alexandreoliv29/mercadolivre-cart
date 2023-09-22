import { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function CartItem({ data }: any) {

    const { cartItems, setCartItems } = useContext(AppContext);
    const {  thumbnail, title, price } = data;

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item);
        setCartItems(updatedItems);
    };

    return (
        <section className="cart-item">
            <img
                src={thumbnail}
                alt="imagem do produto"
                className="cart-item-image"
            />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>

                <button
                    type="button"
                    className="button__remove-item"
                    onClick={handleRemoveItem}
                >
                    <BsCartDashFill />
                </button>
            </div>
        </section>
    );
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}