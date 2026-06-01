import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../download.jpg';
import { Link } from 'react-scroll';
import menu from '../../menuicon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
        <li><Link to="Main" smooth={true} offset={-70} duration={500} onClick={toggleMenu}>Home</Link></li>
        <li><Link to="Programs" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Programs</Link></li>
        <li><Link to="Campus" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Campus</Link></li>
        <li><Link to="About" smooth={true} offset={400} duration={500} onClick={toggleMenu}>About Us</Link></li>
        <li><Link to="Tastimonials" smooth={true} offset={-260} duration={500} onClick={toggleMenu}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
      <img src={menu} alt="Menu" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
