// import React from 'react'

// const BestSeller = () => {
//   return (
//     <div>
//       BestSeller
//       BestSeller
//     </div>
//   )
// }

// export default BestSeller

import React from 'react';
import styled from 'styled-components';
import img1 from '../media/laptops/gaminglap1.jpeg'
import img2 from '../media/laptops/gaminglap2.jpeg'
import img3 from '../media/laptops/gaminglap3.jpeg'
// Sample data for best seller
const bestSellers = [
  {
    id: 1,
    name: "Dell XPS 13",
    image: img1,
    price: "$1,299",
    description: "A high-performance laptop with a sleek design.",
  },
  {
    id: 2,
    name: "Apple MacBook Pro",
    image: img2,
    price: "$1,999",
    description: "Powerful laptop for professionals with Retina display.",
  },
  {
    id: 3,
    name: "HP Envy 13",
    image: img3,
    price: "$1,149",
    description: "An ultrathin laptop with strong performance and battery life.",
  },
  // Add more best sellers as needed
];

const BestSellersContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BestSellersTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin-right: 15px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`;

const ProductDescription = styled.p`
  margin: 5px 0;
  color: #666;
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
  color: #e74c3c;
`;

const BestSeller = () => {
  return (
    <BestSellersContainer>
      <BestSellersTitle>Best Sellers</BestSellersTitle>
      {bestSellers.length === 0 ? (
        <p>No best sellers available at the moment.</p>
      ) : (
        bestSellers.map(product => (
          <ProductItem key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductDetails>
          </ProductItem>
        ))
      )}
    </BestSellersContainer>
  );
};

export default BestSeller;
