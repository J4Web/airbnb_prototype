import React from 'react'
import logo from '../img/Airbnblogo.png'
import './Header.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className='header'> 
      <img className='header__icon' src={logo} />
      <div className='header__center'>
        <input type="text"/>
        <SearchIcon/>
      </div>
      <div className='header__right'>
        <p>Become a host</p> 
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <AccountCircleIcon/>
        </div>
    </div>



  )
}

export default Header