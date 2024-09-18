// import React from 'react'

// const WishList = () => {
//   return (
//     <div>
//       WishList
//       WishList
//     </div>
//   )
// }

// export default WishList

import React from 'react';
import styled from 'styled-components';
import img1 from '../media/laptops/Apple_iPads_in_Pakistan.webp'
import img2 from '../media/laptops/External_HDD_in_Pakistan.webp'
// import img3 from '../media/laptops/Printers_in_Pakistan.png.png'
// Sample data for wish list items
const wishListItems = [
  {
    id: 1,
    name: "Dell XPS 13",
    image: img1,
    description: "A high-performance laptop with a sleek design.",
  },
  {
    id: 2,
    name: "Apple MacBook Air M1",
    image: img2,
    description: "A lightweight laptop with powerful M1 chip.",
  },
 
];

const WishListContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const WishListTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const ItemImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-right: 15px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`;

const ItemDescription = styled.p`
  margin: 5px 0;
  color: #666;
`;

const RemoveButton = styled.button`
  padding: 8px 12px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: #c0392b;
  }
`;

const WishList = () => {
  const handleRemove = (id) => {
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <WishListContainer>
      <WishListTitle>Your Wish List</WishListTitle>
      {wishListItems.length === 0 ? (
        <p>Your wish list is empty.</p>
      ) : (
        wishListItems.map(item => (
          <ItemContainer key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemDetails>
            <RemoveButton onClick={() => handleRemove(item.id)}>Remove</RemoveButton>
          </ItemContainer>
        ))
      )}
    </WishListContainer>
  );
};

export default WishList;
