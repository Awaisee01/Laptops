  import React, { createContext, useState, useContext } from 'react';

  const CartContext = createContext();

  export const useCart = () => useContext(CartContext);

  export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);

      if (existingProduct) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 } // Increment quantity if product exists
              : item
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]); // Add product with quantity 1
      }
    };

    return (
      <CartContext.Provider value={{ cart, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  };
