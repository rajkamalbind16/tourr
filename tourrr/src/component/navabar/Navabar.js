import React, {  useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import {  Box, Tooltip, IconButton, Avatar, colors } from "@mui/material";
import Styles from "./navabar.module.css"
import trip from "../image/trip.svg"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import Musicpage from '../home/music/Musicpage';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { ColorStyle } from 'quill';

import { useDispatch } from 'react-redux';



  
const Navbar = () => {

  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchButtonClick = () => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: searchInput });
  };


  const [hide, setHide] = useState(false);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const name = localStorage.getItem('first_name');
  const isLogin = localStorage.getItem('isLogin');

  const handleOpenUserMenu = () => {
    if (isLogin) {
      navigate('/profileForm');
    } else {
      navigate('/form');
      window.alert('You have to login first');
    }
  };

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      if (isLogin) {
        console.log('po');
        localStorage.clear();
      }
    }
  };
const[show, setshow]=useState(false)
const handleShow = ()=>{
  setshow(true)
  setactive(true)
}
const [active, setactive]=useState(false)
const showActive =()=>{
  setactive(false)
  setshow(false)
}


  return (
    <>
    <div className={Styles.container}>
    <div className={Styles.left}>
    <Link to="/">
                <img width="80%" src={trip} alt="Logo" />
              </Link>
    </div>
    <div className={Styles.right}>
    
      <ul>
      <li>
                    <div className={Styles.search}>
                    <input type="text" placeholder="Where to" style={{ width: '150px', height: '10px' }} value={searchInput} onChange={handleSearchInputChange} />
                    <button type="submit" onClick={handleSearchButtonClick}>
                      <AiOutlineSearch />
                    </button>
                    </div>
                  </li>
                  <li>
                    <Link to="/" style={{ color:'black',textDecoration: 'none' }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Advanture" style={{ color:'black',textDecoration: 'none' }}>
                      Adventure
                    </Link>
                  </li>
                  <li>
                    <Link to="/Feeds" style={{ color:'black',textDecoration: 'none' }}>
                      Feeds
                    </Link>
                  </li>
                  <Link to="/About" style={{color:'black', textDecoration: 'none' }}>
                      About
                    </Link>
                  <li>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                          <h6>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </li>
                  {isLogin ? (
                    <li>
                      <Link to="/form" onClick={handleLogout} style={{color:'black', textDecoration: 'none' }}>
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/form" style={{color:'black', textDecoration: 'none' }}>
                        Sign In
                      </Link>
                    </li>
                  )}
                
                 
                  
      </ul>
    
                 
                 
       {/* {show && <div><ul className={ Styles.active} style={{ listStyle: 'none' }}>
       <li onClick={showActive} style={{color: "white"}}>
       closed
       </li>
              <li>
                <a href="/contact" style={{ textDecoration: 'none' }}>ContectUs</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Destination</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Review</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Alert</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Trip</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Basket</a>
              </li>
            </ul> </div> }  */}
    
           
            
          
     
         
      
    </div>
    <div className={Styles.last}>
    <Musicpage />
    {active ?<div onClick={showActive} style={{color: "white"}}>Close</div> : <div onClick={handleShow } ><FaBars size={20} /> </div>}
    
    
    
     
    {show && <div><ul className={ Styles.active} style={{ listStyle: 'none' }}>
       <li onClick={showActive} style={{color: "white"}}>
       closed
       </li>
       <li className={Styles.hideh}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles.hideh}>
                    <Link to="/Advanture" style={{ textDecoration: 'none' }}>
                      Adventure
                    </Link>
                  </li>
                  <li className={Styles.hideh}>
                    <Link to="/Feeds" style={{ textDecoration: 'none' }}>
                      Feeds
                    </Link>
                  </li>
                  <li className={Styles.hideh}>
                  <Link  to="/About" style={{ textDecoration: 'none' }}>
                      About
                    </Link>
                    </li>
                  <li className={Styles.hideh}>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                          <h6 style={{color:"white"}}>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </li>
                  {isLogin ? (
                    <li style={{color:"white"}} className={Styles.hideh}>
                      <Link to="/form" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li style={{color:"white"}} className={Styles.hideh}>
                      <Link to="/form" style={{ textDecoration: 'none' }}>
                        Sign In
                      </Link>
                    </li>
                  )}
              <li>
                <a href="/contact" style={{ textDecoration: 'none' }}>ContectUs</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Destination</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Review</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Alert</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Trip</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Basket</a>
              </li>
            </ul> </div> } 
    </div>
     
      
    </div>
    
        {/* <div className="header">
          <div className="container">
            <div className={Styles.left}>
              <Link to="/">
                <img width="80%" src={trip} alt="Logo" />
              </Link>
            </div>
            <div className="navv">
              <nav>
                <ul className="containerr">
                  <li>
                    <div className="search-bar">
                      <input type="text" placeholder="Where to" style={{ width: '150px', height: '10px' }} />
                      <button type="submit">
                        <AiOutlineSearch />
                      </button>
                    </div>
                  </li>
                  <li>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Advanture" style={{ textDecoration: 'none' }}>
                      Adventure
                    </Link>
                  </li>
                  <li>
                    <Link to="/Feeds" style={{ textDecoration: 'none' }}>
                      Feeds
                    </Link>
                  </li>
                  <Link to="/About" style={{ textDecoration: 'none' }}>
                      About
                    </Link>
                  <li>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                          <h6>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </li>
                  {isLogin ? (
                    <li>
                      <Link to="/form" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/form" style={{ textDecoration: 'none' }}>
                        Sign In
                      </Link>
                    </li>
                  )}
                </ul>
    
       {show && <div><ul className={ 'nav active'} style={{ listStyle: 'none' }}>
       <li onClick={showActive} style={{color: "white"}}>
       closed
       </li>
              <li>
                <a href="/contact" style={{ textDecoration: 'none' }}>ContectUs</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Destination</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Review</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Alert</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Trip</a>
              </li>
              <li>
                <a href='/' style={{ textDecoration: 'none' }}>Basket</a>
              </li>
            </ul> </div> } 
    
            </nav>
        
            </div>
            
             <Musicpage />
            
           {active ?<div onClick={showActive} style={{color: "white"}}>X</div> :<FaBars onClick={handleShow } size={10} /> }
    
        
    
            
        </div>
    
        </div> */}
        </>
    
  )
}

export default Navbar;