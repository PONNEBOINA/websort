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
      <div className="navbar-container">
        <div className="logo-section">
          <img
            src="https://res.cloudinary.com/dnxbl0xrb/image/upload/v1750572223/Rectangle_3_mwiasp.png"
            alt="logo"
            className="logo"
          />
          <div className="hamburger" onClick={toggleMenu}>
            ☰
          </div>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/aboutUs" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/career" onClick={() => setIsOpen(false)}>Career</Link>
          <button onClick={contactSection}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
