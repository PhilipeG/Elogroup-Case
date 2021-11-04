import React from 'react';
import LogoImage from '../../Assets/logo.png'
import './styles.css'

function Logo() {
    return (
        <img className='Logo' src={LogoImage} alt="logo"></img>
    );
}
  
export default Logo;