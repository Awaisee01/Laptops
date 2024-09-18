import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ss from "../media/Same_Day_Delivery_Paklap.png.png";
import d1 from "../media/d1.svg";
import d2 from "../media/d2.svg";
import d3 from "../media/d3.svg";
import styled from "styled-components";
const CrouselMain = () => {
  return (
    <Main className="bg-white">
        <div className="carosel mb-3">
            
      <Carousel>
        <Carousel.Item className="text-center" >
          <img src={ss} alt="" />
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <img src={ss} alt="" />
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <img src={ss} alt="" />
        </Carousel.Item>
      </Carousel>
        </div>
      <div className="divi bg-white d-flex justify-content-between mb-3 ps-3 pe-2 ">
        <div className="flex">
            <img src={d1} alt="" />
            <span>Free Shipping on All Laptop Orders</span>
        </div>
        <div className="flex">
            <img src={d2} alt="" />
            <span>7 Days Replacement Policy</span>
        </div>
        <div className="flex">
            <img src={d3} alt="" />
            <span>Safe & Secure Shopping</span>
        </div>
      </div>
    </Main>
  );
};

export default CrouselMain;

const Main = styled.div`
  width: 100%;
  height: 70%;
  
  .carosel{
      background-color: #3e95cb;

  }
 
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
span{
    width: 70%;
    padding-left: 10px;
}
`;
