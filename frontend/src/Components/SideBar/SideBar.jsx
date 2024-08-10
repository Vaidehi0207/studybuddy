import React from 'react'
import './SideBar.css'
import dja from '../../assets/django.jpg'
import java from '../../assets/javascript.png'
import sql from '../../assets/sql.png';
import design from '../../assets/design.png'
import automobile from '../../assets/automobiles.png'
import paint from '../../assets/blogs.png';
import music from '../../assets/music.png';

const SideBar = ({ sidebar }) => {  // Corrected 'sideBar' to 'sidebar'
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
        <div className="sortcut-links">
            <div className='side-links'>
                <img src={dja} alt="" /><p>Django</p>
            </div>
            <div className='side-links'>
                <img src={java} alt="" /><p>Javascript</p>
            </div>
            <div className='side-links'>
                <img src={sql} alt="" /><p>SQL</p>
            </div>
            <div className='side-links'>
                <img src={design} alt="" /><p>Design</p>
            </div>
            <div className='side-links'>
                <img src={automobile} alt="" /><p>Automobile</p>
            </div>
            <div className='side-links'>
                <img src={paint} alt="" /><p>Painting</p>
            </div>
            <div className='side-links'>
                <img src={music} alt="" /><p>Music</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar
