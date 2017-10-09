import { Link } from 'react-router-dom'
import React from 'react';

const Header = () => (

  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ForSale'>For Sale</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;
