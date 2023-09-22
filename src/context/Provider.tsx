import { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext.js'

function Provider({ children }: any) {

    const [products, setProducts] = useState<any[]>([]);
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);


    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setIsCartVisible,
    };

    console.log("products no provider: ", products)

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}
