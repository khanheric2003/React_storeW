import React, {useState} from 'react'
import { Link } from 'react-router-dom' 
import { Button } from './Button';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false); //update state on click

  const handleCLick = () => setClick(!click);
  const [button, setButton] = useState(true)
  const closeMobileMenu = () => setClick(!false);


  const showButton = () => {
    if(window.innerWidth <=960) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container"> 
          <ul>
            <Link to="/" className="navbar-logo">
              BLYATTT <i className ='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleCLick} >
              <i className ={click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>  
            <ul className={click ? 'nav-menu active' : 'nav-menu'} />

            <li className='nav-item'>
              <Link to='/' classname='nav-Links' onClick={closeMobileMenu} >
                Home
              </Link>
              </li>  
            
              <li className='nav-item'>
                <Link to='/services' classname='nav-Links' onClick={closeMobileMenu} >
                  Services
                </Link>
              </li>    

              <li className='nav-item'>
              <Link to='/products' classname='nav-Links' onClick={closeMobileMenu} >
                Products
              </Link>
              </li>   

              <li className='nav-item'>
              <Link to='/sign-up' classname='nav-Links-mobile' onClick={closeMobileMenu} >
                Sign up
              </Link>
            </li>  
          </ul>  
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar