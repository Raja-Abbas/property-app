import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import hero from "../../images/logo.png";
import search from "../../images/search-icon.svg";

function Header() {
  

  return (
    <Navbar expand="lg" className="custom-navbar navbar-light bg-md-light d-flex jutify-content-around align-items-center">
      <Container className="d-flex align-items-center">
      <a className="nav-link active text-white" href="/">
        <img src={hero} alt="" loading="lazy"/>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
          <Nav className="custom-nav mx-auto">
          <div className="dropdown">
  <button
    className="nav-link active text-white dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Buyer
  </button>
  <ul className="dropdown-menu position-absolute" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="/">Home</a></li>
    <li><a className="dropdown-item" href="Investor">Investor</a></li>
    <li><a className="dropdown-item" href="Contact">Contact Us</a></li>
    <li><a className="dropdown-item" href="About">About Us</a></li>
  </ul>
</div>
<div className="dropdown">
  <button
    className="nav-link active text-white dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Seller
  </button>
  <ul className="dropdown-menu position-absolute" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="/">Home</a></li>
    <li><a className="dropdown-item" href="Investor">Investor</a></li>
    <li><a className="dropdown-item" href="Contact">Contact Us</a></li>
    <li><a className="dropdown-item" href="About">About Us</a></li>
  </ul>
</div>
<div className="dropdown">
  <button
    className="nav-link active text-white dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Investor
  </button>
  <ul className="dropdown-menu position-absolute" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="/">Home</a></li>
    <li><a className="dropdown-item" href="Investor">Investor</a></li>
    <li><a className="dropdown-item" href="Contact">Contact Us</a></li>
    <li><a className="dropdown-item" href="About">About Us</a></li>
  </ul>
</div>
<div className="dropdown">
  <button
    className="nav-link active text-white dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-toggle="dropdown"
    aria-expanded="false"
  >
    Property Management
  </button>
  <ul className="dropdown-menu position-absolute" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="/">Home</a></li>
    <li><a className="dropdown-item" href="Investor">Investor</a></li>
    <li><a className="dropdown-item" href="Contact">Contact Us</a></li>
    <li><a className="dropdown-item" href="About">About Us</a></li>
  </ul>
</div>
          </Nav>
          <div className="d-flex gap-4">
          <div className="position-relative row custom-gap search-icon">
              <img src={search} alt="search" className="w-100" loading="lazy"/>
            </div>

            <li className="nav-item link d-flex align-items-center">
              <a className="nav-link active text-white" href="about">
                Agents
              </a>
            </li>
            <button type="button" className="contact btn btn-outline-light">
            <a className="nav-link active text-white" href="contact">
                Contact
              </a>
            </button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;