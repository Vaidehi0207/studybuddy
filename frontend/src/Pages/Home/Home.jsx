import React from 'react'
import './Home.css'
import SideBar from '../../Components/SideBar/SideBar'

const Home = ({ sidebar }) => {  // Ensure the prop name is 'sidebar'
  return (
    <>
      <SideBar sidebar={sidebar}/>
    </>
  )
}

export default Home
