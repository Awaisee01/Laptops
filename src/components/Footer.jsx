import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaComments, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaPhoneAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const FooterTop = styled.div`
  background-color: #008fd1;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterHeading = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
`;

const FooterContact = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ContactItem = styled.a`
  color: white;
  font-size: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0;
  border-top: 1px solid #ddd;
  margin-top: 20px;
  color: #333;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px;
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 15px;
`;

const FooterLink = styled.a`
  display: block;
  color: #333;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 20px;
`;

const FooterCopyright = styled.div`
  margin-top: 20px;
  color: #666;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterHeading>Questions? Talk to a specialist</FooterHeading>
        <FooterContact>
          <ContactItem href="tel:03041113005">
            <FaPhoneAlt /> 0304-111-3005
          </ContactItem>
          <ContactItem href="#">
            <FaComments /> Chat now
          </ContactItem>
          <ContactItem href="mailto:info@paklap.pk">
            <FaEnvelope /> Message us
          </ContactItem>
        </FooterContact>
      </FooterTop>
      
      <FooterBottom>
        <FooterColumn>
          <FooterTitle>Products</FooterTitle>
          <FooterLink href="/newlaptops">Laptops</FooterLink>
          <FooterLink href="/apple">MacBooks</FooterLink>
          <FooterLink href="/tablets">Tablets</FooterLink>
          <FooterLink href="/harddrive">External Hard Drives</FooterLink>
          <FooterLink href="/printers">Printers</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Information</FooterTitle>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Reviews</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Policy</FooterTitle>
          <FooterLink href="#">Payment Information</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Replacement & Warranty</FooterLink>
          <FooterLink href="#">Warranty by Paklap</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <SocialIcons>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
            <FaYoutube />
          </SocialIcons>
        </FooterColumn>
      </FooterBottom>
      
      <FooterCopyright>
        © 2024 PakLap.pk, All Rights Reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
