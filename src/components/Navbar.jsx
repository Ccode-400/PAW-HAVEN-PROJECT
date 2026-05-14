import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
    <h1 className="logo">Paw Haven Rescue</h1>
    <div className="nav-content">
      

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/adopt">Adopt</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/report-case">Report</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;