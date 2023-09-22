import { createContext, Dispatch, SetStateAction } from 'react';

interface AppContextType {
    products: any[];
    setProducts: Dispatch<SetStateAction<any[]>>;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    cartItems: any[];
    setCartItems: Dispatch<SetStateAction<any[]>>;
    isCartVisible: boolean;
    setIsCartVisible: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: AppContextType = {
    products: [],
    setProducts: () => { },
    loading: true,
    setLoading: () => { },
    cartItems: [],
    setCartItems: () => { },
    isCartVisible: false,
    setIsCartVisible: () => { },
}

const AppContext = createContext<AppContextType>(defaultValue);

export default AppContext;