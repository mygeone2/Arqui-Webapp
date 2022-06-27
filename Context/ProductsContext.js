import React,{useState} from "react";

const ProductsContext = React.createContext();

const initialProductsState = {
    PCB: null,
    Case: null,
    Switches: null,
    Keycaps: null
}

const ProductsContextProvider = ({children}) => {
    const [products, setProducts] = useState(initialProductsState);

    return (
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider> 
    )
}

export {ProductsContext, ProductsContextProvider}