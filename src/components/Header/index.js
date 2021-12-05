import React from 'react';
import Logo from '../../assets/logo-teste.svg';
import './styles.css';

const Header = () => {
  return (
    <nav>
      <img src={Logo} alt="Logo Impar" className="logoNav" />
    </nav>
  )
}

export default Header;