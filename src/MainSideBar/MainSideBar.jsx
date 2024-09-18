// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const MainSideBar = () => {
//   return (
//     <Main className="bg- col-3 bg-white">
//       <div className=" d-flex flex-column main ms-5  ">
//         <Link to="/newlaptops">New Laptops</Link>
//         <Link to="/usedlaptops">Used Laptops</Link>
//         <Link to="/apple">Apple</Link>
//         <Link to="/tablets">Tablets</Link>
//         <Link to="/desktop">Desktop</Link>
//         <Link to="/harddrive">External Hard Drive</Link>
//         <Link to="/printers">Printers</Link>
//         <Link to="/scanners">Scanners</Link>
//         <Link to="/gadgets">Gadgets</Link>
//         <Link to="/cameras">Cameras</Link>
//         <Link to="/multimedia">Multimedia</Link>
//         <Link to="/gaming">Gaming Console</Link>
//         <Link to="/dailydeals">Daily Deals</Link>
//       </div>
//     </Main>
//   );
// };

// export default MainSideBar;

// const Main = styled.div`
//   .main {
//     line-height: 45px;
//   }
//   a {
//     text-decoration: none;
//     color: black;
//     transition: 0.3s;
//   }
//   a:hover {
//     color: #00000099;
//   }
// `;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import {categories} from '../components/Dummy'
// const MainSideBar = () => {
//   const [hoveredItem, setHoveredItem] = useState();



//   return (
//     <Main>
//       <div className="sidebar">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredItem(index)}
//             onMouseLeave={() => setHoveredItem(null)}

//             className="category-item"
//           >
//             <Link to={category.link}>{category.name}</Link>
//             {category.subcategories.length > 0 && (
//               <SubMenu isVisible={hoveredItem == index}>
//                 {category.subcategories.map((subcat, subIndex) => (
//                   <Link key={subIndex}
                  
//                   to={`/category/${subcat.toLowerCase()}`}>
//                     {subcat}
//                   </Link>
//                 ))}
//               </SubMenu>
//             )}
//           </div>
//         ))}
//       </div>
//     </Main>
//   );
// };

// export default MainSideBar;

// // Styled components for sidebar
// const Main = styled.div`
//   .sidebar {
//     width: 250px;
//     background-color: #fff;
//     border-right: 1px solid #ddd;
//   }

//   .category-item {
//     position: relative;
//     padding: 15px;
//     cursor: pointer;
//     &:hover {
//       background-color: #f5f5f5;
//     }
//   }

//   a {
//     text-decoration: none;
//     color: black;
//     display: block;
//     transition: 0.3s;
//     font-size: 14px;
//   }

//   a:hover {
//     color: #007bff;
//   }
// `;

// const SubMenu = styled.div`
//   position: absolute;
//   top: 0;
//   left: 250px;
//   width: 200px;
//   background-color: #f9f9f9;
//   border-left: 1px solid #ddd;
//   padding: 10px;
//   display: ${({ isVisible }) => (isVisible ? "block" : "none")};

//   a {
//     padding: 5px 0;
//   }
// `;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { categories } from '../components/Dummy';

// const MainSideBar = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setActiveIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setActiveIndex(null);
//   };

//   return (
//     <Main>
//       <div className="sidebar">
//         {categories.map((category, index) => (
//           <CategoryWrapper
//             key={index}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <CategoryItem>
//               <Link to={category.link}>{category.name}</Link>
//             </CategoryItem>
//             {category.subcategories.length > 0 && (
//               <SubMenu isVisible={activeIndex === index}>
//                 {category.subcategories.map((subcat, subIndex) => (
//                   <Link key={subIndex} to={`/category/${subcat.toLowerCase()}`}>
//                     {subcat}
//                   </Link>
//                 ))}
//               </SubMenu>
//             )}
//           </CategoryWrapper>
//         ))}
//       </div>
//     </Main>
//   );
// };

// export default MainSideBar;

// // Styled components for sidebar
// const Main = styled.div`
//   .sidebar {
//     width: 250px;
//     background-color: #fff;
//     border-right: 1px solid #ddd;
//   }
//   a{
//     text-decoration: none;
//     color: #000;
//   }
//   a:hover{
//     color: #6d6dca;
//   }
// `;

// const CategoryWrapper = styled.div`
//   position: relative;
// `;

// const CategoryItem = styled.div`
//   padding: 15px;
//   cursor: pointer;
//   &:hover {
//     background-color: #f5f5f5;
//   }
// `;

// const SubMenu = styled.div`
//   position: absolute;
//   top: 0;
//   left: 180px;
//   width: 200px;
//   background-color: #f9f9f9;
//   border-left: 1px solid #ddd;
//   padding: 10px;
//   display: ${({ isVisible }) => (isVisible ? "block" : "none")};
//   z-index: 1;

//   a {
//     display: block;
//     padding: 5px 0;
//   }
// `;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from '../components/Dummy';

const MainSideBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <Main>
      <div className="sidebar">
        {categories.map((category, index) => (
          <CategoryWrapper
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <CategoryItem>
              <Link to={category.link}>{category.name}</Link>
            </CategoryItem>
            {category.subcategories.length > 0 && (
              <SubMenu isVisible={activeIndex === index}>
                {category.subcategories.map((subcat, subIndex) => (
                  <Link
                    key={subIndex}
                    to={`/subcategory/${subcat.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {subcat}
                  </Link>
                ))}
              </SubMenu>
            )}
          </CategoryWrapper>
        ))}
      </div>
    </Main>
  );
};

export default MainSideBar;

// Styled components for sidebar
const Main = styled.div`
  .sidebar {
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #ddd;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: #6d6dca;
  }
`;

const CategoryWrapper = styled.div`
  position: relative;
`;

const CategoryItem = styled.div`
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 0;
  left: 180px;
  width: 200px;
  background-color: #f9f9f9;
  border-left: 1px solid #ddd;
  padding: 10px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  z-index: 1;

  a {
    display: block;
    padding: 5px 0;
  }
`;
