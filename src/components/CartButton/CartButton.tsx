import { AiOutlineShoppingCart } from 'react-icons/ai'

export const CartButton = () => {
    return (
        <button type='button' className='cart_button'>
            <AiOutlineShoppingCart />
            <span className='cart_status'></span>
        </button>
    )
}