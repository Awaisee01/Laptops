import React from 'react'
import img1 from "../media/laptops/Apple_iPads_in_Pakistan.webp"
import img2 from "../media/laptops/External_HDD_in_Pakistan.webp"
import img3 from "../media/laptops/Printers_in_Pakistan.png.png"
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const categories = [
  {
    name: "Apple Ipads",
    image: img1,
    link: "/apple",
  },
  {
    name: "Printers",
    image: img2,
    link: "/printers",
  },
  {
    name: "External Hard Drives",
    image: img3,
    link: "/harddrive",
  },
];
const Banners = () => {
  return (
    <Main>
       <CategoriesWrapper>
      {categories.map((category, index) => (
        <CategoryCard key={index}>
          <img src={category.image} alt={category.name} />
          <CategoryTitle>{category.name}</CategoryTitle>
          <ShopButton>
            <Link to={category.link}>Shop Now</Link>
          </ShopButton>
        </CategoryCard>
      ))}
    </CategoriesWrapper>
    </Main>
  )
}

export default Banners

const Main = styled.div`



`;
const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-top: 20px;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img {
    height: auto;
    margin-bottom: 10px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

const ShopButton = styled.button`
  background-color: #ffbf00;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background-color: #ffa500;
  }
`;