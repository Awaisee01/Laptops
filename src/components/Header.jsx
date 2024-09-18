import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ss from "../media/Paklap_Yellow_Logo_1.webp";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Main>
      <Navbar expand="lg" className="nav">
        <Container>
          <Navbar.Brand className="logo" href="/">
            <img src={ss} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  col-12 d-flex  justify-content-between align-items-center">
              <div className="inp">
                <input type="text" placeholder="Search entire shop here..." />
                <i>
                  <SearchIcon />
                </i>
              </div>
              <Link to='/myaccount' >
                <i>
                  <PersonOutlineIcon />
                My Account
                </i>
              </Link>
             <Link to='/wishlist' >
             <i>
                <FavoriteBorderIcon />
              My Wish List
              </i>
             </Link>
             <Link to='/mycart' >
                <i>
                    <ShoppingCartIcon/>
                My Cart
                </i>
             </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Main>
  );
};

export default Header;

const Main = styled.div`
  .nav {
    background-color: #3e95cb;
  }
  .logo img {
    width: 150px;
  }
  input {
    width: 400px;
    height: 40px;
    border-radius: 20px;
    outline: none;
    border: none;
    background-color: #f5f5f6;
    padding-left: 20px;
    padding-right: 40px;
  }
  .inp i {
    position: absolute;
    right: 10px;
    top: 3px;
    font-size: 20px;
    color: #000;
  }
  .inp {
    position: relative;
  }
.d-flex{
    justify-content: center;
    align-items: center;
}
i{
    color: #fff;
    transition: 0.3s;
}
a{
  text-decoration: none;
}
i:hover{
  color: #4d0808; 
}

@media screen {
  
}
`;
