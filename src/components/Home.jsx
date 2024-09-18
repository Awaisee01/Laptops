import React from 'react'
import Header from './Header'
import Header2 from './Header2'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Header/>
    <Header2/>
    <Outlet/>
    </>
  )
}

export default Home
