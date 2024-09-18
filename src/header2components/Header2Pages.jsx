import React from 'react'
import {  Routes, Route } from "react-router-dom";
import DailyDeals from './DailyDeals'
import Blog from './Blog'
import ContactUs from './ContactUs'
import BestSeller from './BestSeller'
import Header2 from '../components/Header2';
const Header2Pages = () => {
  return (
    <div>
       <>
        <Header2 />
        <Routes>
          <Route path="/dailydeals" element={<DailyDeals />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/bestseller" element={<BestSeller />} />
        </Routes>
      </>
    </div>
  )
}

export default Header2Pages
