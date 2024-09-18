// FeatureSection.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Example icons (replace with actual icons)
import cashIcon from "../media/d1.svg";
import shippingIcon from "../media/d2.svg";
import securityIcon from "../media/d3.svg";

const features = [
  {
    icon: cashIcon,
    title: "Cash on Delivery",
    description: "With our advanced payment module you can select the payment method that fits! And always secure.",
    link: "/payments",
  },
  {
    icon: shippingIcon,
    title: "Free Shipping",
    description: "Benefit from our free shipping to get your products wherever you need them.",
    link: "/shipping",
    // border: "right",
    border: "left", 
  },
  {
    icon: securityIcon,
    title: "Security, from start to finish",
    description: "We take security very seriously. This is why we don't store your data and encrypt all transactions.",
    link: "/security",
  },
];

const FeatureSection = () => {
  return (
    <FeaturesWrapper>
      {features.map((feature, index) => (
        <FeatureCard key={index} border={feature.border}>
          <Icon src={feature.icon} alt={feature.title} />
          <Title>{feature.title}</Title>
          <Description>{feature.description}</Description>
          <MoreLink to={feature.link}>More about {feature.title.toLowerCase()}</MoreLink>
        </FeatureCard>
      ))}
    </FeaturesWrapper>
  );
};

export default FeatureSection;

// Styled components
const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  border-right: ${(props) => (props.border === 'left' ? '1px solid black' : 'none')};
  border-left: ${(props) => (props.border === 'left' ? '1px solid black' : 'none')};
`;

const Icon = styled.img`
  width: 60px;
  height: auto;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-top: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 10px;
`;

const MoreLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
