import React from "react";
import styled from "styled-components";
import {laptops} from './Dummy'
import { useCart } from "../headercomponents/CartContext";
import { Link } from "react-router-dom";

const GamingLaptop = ({ mode }) => {


  const { addToCart } = useCart();

  if (!addToCart) {
    console.error("addToCart is not available");
    return null;
  }

  return (
    <Main>
      <Link to={mode == "Name" ? "/newlaptops" : "/gaming"}>
        <h1 className="text-center mt-3">
          {" "}
          {mode == "Name" ? "New Laptop" : "Gaming Laptop"}
        </h1>
      </Link>
      <LaptopGrid>
        {laptops.map((laptop, index) => (
          <LaptopCard key={index}>
            <img src={laptop.image} alt={laptop.name} />
            <LaptopDetails className="">
            <div className="p-5">
            <h2>{laptop.name}</h2>
              <p>
                <strong>Generation:</strong> {laptop.generation}
              </p>
              <p>
                <strong>RAM:</strong> {laptop.ram}
              </p>
              <p>
                <strong>ROM:</strong> {laptop.rom}
              </p>
              <p>
                <strong>Price:</strong> {laptop.price}
              </p>
              <p>
                <strong>What it’s for:</strong> {laptop.need}
              </p>
            <div className="d-flex flex-column">
            <AddButton onClick={() => addToCart(laptop)}>
                Add to Cart
              </AddButton>
              <Link to={`/laptopDetails/${laptop.id}`}>
                <SeeMoreButton>See More</SeeMoreButton>
              </Link>
            </div>
            </div>
            </LaptopDetails>
          </LaptopCard>
        ))}
      </LaptopGrid>
    </Main>
  );
};

export default GamingLaptop;
const Main = styled.div`
  a {
    text-decoration: none;
    color: #000;
  }
`;
const LaptopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LaptopCard = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const LaptopDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 10px;
  text-align: center;

  &:hover {
    opacity: 1;
  }

  h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 5px;
  }

  strong {
    display: block;
    margin-top: 10px;
    color: #fff;
  }
`;

const AddButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const SeeMoreButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
