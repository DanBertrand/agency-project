import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import Bigbutton from 'components/Bigbutton/Bigbutton'
import ModeContext from 'components/ModeContext/ModeContext';
import { useContext } from 'react';

const Navbar = () => {

const currentState = useContext(ModeContext);
  return (
    <nav className={`nav nav--${currentState}`}>
      <div className="Navbar__links">
        <Link to="/" exact>Home</Link>
        <Link to="/about" exact>About</Link>
        <Link to="/works" exact>Projets</Link>
      </div>
      <Bigbutton />
    </nav>
  );
};

export default Navbar;
