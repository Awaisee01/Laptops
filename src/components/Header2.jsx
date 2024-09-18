import React from 'react'
import styled from "styled-components";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
const Header2 = () => {
  return (
    <Main className=' bg-white '>
       <div className="bg-warning col-3 text-center main">
        <FormatListBulletedIcon />
        Browser Categories
       </div>
       <div className=' col-5 ms-5  main justify-content-between'>
        <Link to = '/dailydeals'>Daily Deals</Link>
        <Link to = '/bestseller'>Best Seller</Link>
        <Link to = '/blog'>Blog</Link>
        <Link to = '/contactUs'>Contact us</Link>
      
       </div>
    </Main>
  )
}

export default Header2

const Main = styled.div`

display: flex;

a{
    text-decoration: none;
    color: #000;
}
.main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
}

`;