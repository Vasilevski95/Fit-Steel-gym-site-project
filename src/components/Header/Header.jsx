import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";


const Header = () => {

  const [mobile, setMobile] = useState(false)



  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <ul className= {mobile ? 'header-menu-mobile' : 'header-menu'} onClick={() => setMobile(false)}>
        <li>
          <Link to="home" smooth={true}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="why us" smooth={true}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth={true}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="join us" smooth={true}>
            Join us
          </Link>
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
      {mobile ? <HiX/> : <HiMenu/>}
      </button>
    </div>
  );
};

export default Header;
