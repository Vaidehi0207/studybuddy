import React from 'react'
import './Navbar.css'
import {useNavigate} from 'react-router-dom'
import logo from "../../assets/logo tr.png";
import search from "../../assets/search.png";
import loginicon from "../../assets/logini.jpg";

const Navbar = ({setSidebar}) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
  
    const handleLoginClick = () => {
      navigate('/login'); // Navigate to the login page when the Login button is clicked
    };

  return (
    <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='logo-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)}src={logo} alt="" />
            <h2>Study Buddy</h2>
        </div>

        <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
            <input type="text" placeholder='Search'/>
            <img src={search} alt="" />
            </div>
        </div>

        <div className="nav-right flex-div">
            <img className='login-icon'src={loginicon} alt="" />
        <span className='butlog' onClick={handleLoginClick}>Login</span>
        </div>
      
    </nav>
  );
}

export default Navbar
