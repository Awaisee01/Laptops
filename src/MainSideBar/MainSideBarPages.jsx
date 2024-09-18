import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NewLaptops from "./NewLaptops";
import UsedLaptops from "./UsedLaptops";
import Apple from "./Apple";
import Tablets from "./Tablets";
import Desktop from "./Desktop";
import HardDrive from "./HardDrive";
import Printers from "./Printers";
import Scanners from "./Scanners";
import Gadgets from "./Gadgets";
import Cameras from "./Cameras";
import Multimedia from "./Multimedia";
import Gaming from "./Gaming";
import MainSideBar from "./MainSideBar"; 
const MainSideBarPages = () => {
  return (
    <Main>
        {/* <MainSideBar/> */}
      <Routes>
        <Route path="/" element={<>
        
            <MainSideBar/>
            
        
        </>} />
      <Route path="/newlaptops" element={<NewLaptops/>} />
      <Route path="/usedlaptops" element={<UsedLaptops/>} />
      <Route path="/apple" element={<Apple/>} />
      <Route path="/tablets" element={<Tablets/>} />
      <Route path="/desktop" element={<Desktop/>} />
      <Route path="/harddrive" element={<HardDrive/>} />
      <Route path="/printers" element={<Printers/>} />
      <Route path="/scanners" element={<Scanners/>} />
      <Route path="/gadgets" element={<Gadgets/>} />
      <Route path="/cameras" element={<Cameras/>} />
      <Route path="/multimedia" element={<Multimedia/>} />
      <Route path="/gaming" element={<Gaming/>} />
      <Route path="*" element={<h1>error</h1>} />
      </Routes>
    </Main>
  );
};

export default MainSideBarPages;

const Main = styled.div``;
