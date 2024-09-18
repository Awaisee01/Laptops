// LaptopBlogPost.jsx
import React from 'react';
import styled from 'styled-components';
import laptopImage from '../media/laptops/lap8.jpeg'; // Path to your laptop image

const BlogContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const BlogTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
`;

const BlogImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 20px 0;
`;

const BlogContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const Blog = () => (
  <BlogContainer>
    <BlogTitle>Why the Dell XPS 13 is the Best Laptop for 2024</BlogTitle>
    <BlogImage src={laptopImage} alt="Dell XPS 13" />
    <BlogContent>
      <p>The Dell XPS 13 is one of the most highly recommended laptops of 2024 for its outstanding combination of performance, design, and portability. Here's a detailed look at why this laptop stands out:</p>
      
      <h2>Design and Build Quality</h2>
      <p>The XPS 13 is known for its sleek, premium design. It features a compact, lightweight aluminum chassis that is both durable and stylish. The laptop’s edge-to-edge display and slim profile make it an attractive choice for users who value aesthetics and portability.</p>
      
      <h2>Performance</h2>
      <p>Equipped with the latest 11th Gen Intel Core processors, the XPS 13 delivers exceptional performance for both everyday tasks and more demanding applications. With up to 16GB of RAM and a 512GB SSD, users can expect fast boot times and smooth multitasking capabilities. Whether you’re working on complex projects or simply browsing the web, the XPS 13 handles it all with ease.</p>
      
      <h2>Display Quality</h2>
      <p>The 13.4-inch InfinityEdge display offers stunning visuals with its Full HD or optional 4K resolution. The narrow bezels provide an immersive viewing experience, and the high brightness ensures clarity even in brightly lit environments. The touch-screen option adds an extra layer of convenience for interactive tasks.</p>
      
      <h2>Battery Life</h2>
      <p>Battery life is another highlight of the XPS 13. The laptop is designed to last up to 12 hours on a single charge, depending on usage, which is ideal for long workdays or travel. The efficient power management system helps keep the laptop running longer without needing frequent recharges.</p>
      
      <h2>Additional Features</h2>
      <p>The XPS 13 comes with a range of additional features, including a backlit keyboard for comfortable typing in low light, a precision touchpad for accurate navigation, and a high-quality webcam for clear video calls. It also includes multiple ports, such as Thunderbolt 4 and USB-C, for versatile connectivity options.</p>
      
      <h2>Conclusion</h2>
      <p>Overall, the Dell XPS 13 is a top choice for users looking for a premium laptop that offers a great balance of performance, design, and portability. Its combination of powerful hardware, high-quality display, and long battery life makes it a reliable and attractive option for professionals, students, and anyone in need of a high-performing laptop.</p>
    </BlogContent>
  </BlogContainer>
);

export default Blog;
