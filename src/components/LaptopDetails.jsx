
import { useCart } from "../headercomponents/CartContext";
import React from "react";
import { useParams } from "react-router-dom";
import {laptops} from "./Dummy"; // Separate your laptop data into a file

const LaptopDetails = () => {
    const { addToCart } = useCart();
    const { id } = useParams();
  
    if (!addToCart) {
      console.error("addToCart is not available");
      return null;
    }
  const laptop = laptops.find((laptop) => laptop.id === parseInt(id));

  if (!laptop) {
    return <h2>Laptop not found</h2>;
  }
  return (
    <div>
      <h1>{laptop.name}</h1>
      <img src={laptop.image} alt={laptop.name} />
      <p><strong>Generation:</strong> {laptop.generation}</p>
      <p><strong>RAM:</strong> {laptop.ram}</p>
      <p><strong>ROM:</strong> {laptop.rom}</p>
      <p><strong>Price:</strong> {laptop.price}</p>
      <p><strong>What it’s for:</strong> {laptop.need}</p>
      <button onClick={() => addToCart(laptop)}>Add to Cart</button>
    </div>
  );
};

export default LaptopDetails;
