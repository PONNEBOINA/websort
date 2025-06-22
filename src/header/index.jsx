import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const contactSection = () => {
    navigate("/contactUs");
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="first-part">
        <img
          src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750572223/Rectangle_3_mwiasp.png"
          alt="logo"
          className="logo"
        />
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <div className={`second-part ${isOpen ? "open" : ""}`}>
        <Link to="/" className="links" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/aboutUs" className="links" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/projects" className="links" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/career" className="links" onClick={() => setIsOpen(false)}>Career</Link>
        <button type="button" onClick={contactSection}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Header;
