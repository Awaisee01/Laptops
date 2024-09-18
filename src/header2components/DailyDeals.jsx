

import React from 'react';
import styled from 'styled-components';
import img1 from '../media/laptops/lap4.jpeg'
import img2 from '../media/laptops/lap5.jpeg'
// Sample data for daily deals
const dailyDeals = [
  {
    id: 1,
    name: "HP Spectre x360",
    image: img1,
    originalPrice: "$1,499",
    discountedPrice: "$1,199",
    description: "Great for creative professionals, with a 2-in-1 convertible design.",
  },
  {
    id: 2,
    name: "Dell Inspiron 14",
    image: img2,
    originalPrice: "$899",
    discountedPrice: "$699",
    description: "Affordable laptop with essential features for everyday use.",
  },
  // Add more deals as needed
];

const DealsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const DealsTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const DealItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

const DealImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 8px;
  margin-right: 15px;
`;

const DealDetails = styled.div`
  flex: 1;
`;

const DealName = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #333;
`;

const DealDescription = styled.p`
  margin: 5px 0;
  color: #666;
`;

const DealPrice = styled.p`
  margin: 5px 0;
  font-size: 1.2rem;
  color: #e74c3c;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
`;

const DiscountButton = styled.button`
  padding: 10px 15px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #2ecc71;
  }
`;

const DailyDeals = () => {
  return (
    <DealsContainer>
      <DealsTitle>Today's Deals</DealsTitle>
      {dailyDeals.length === 0 ? (
        <p>No deals available today.</p>
      ) : (
        dailyDeals.map(deal => (
          <DealItem key={deal.id}>
            <DealImage src={deal.image} alt={deal.name} />
            <DealDetails>
              <DealName>{deal.name}</DealName>
              <DealDescription>{deal.description}</DealDescription>
              <DealPrice>
                <OriginalPrice>{deal.originalPrice}</OriginalPrice>
                {deal.discountedPrice}
              </DealPrice>
              <DiscountButton>Shop Now</DiscountButton>
            </DealDetails>
          </DealItem>
        ))
      )}
    </DealsContainer>
  );
};

export default DailyDeals;
