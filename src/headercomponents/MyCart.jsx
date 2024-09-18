
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../headercomponents/CartContext';

const CartContainer = styled.div`
  padding: 20px;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const MyCart = () => {
  const { cart } = useCart();

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <CartItem key={product.id}>
            <div>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
            <img src={product.image} alt={product.name} width="100px" />
          </CartItem>
        ))
      )}
    </CartContainer>
  );
};

export default MyCart;
