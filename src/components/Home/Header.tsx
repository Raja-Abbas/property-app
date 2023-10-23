import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import hero from "../../images/logo.png";
import search from "../../images/search-icon.svg";
import Icon from "../../images/R Icon.svg"

function Header() {
  const menuItems = [
    {
      title: "Buyer",
      items: ["Action", "Another action", "Something", "Separated link"],
    },
    {
      title: "Seller",
      items: ["Action", "Another action", "Something", "Separated link"],
    },
    {
      title: "Investor",
      items: ["Action", "Another action", "Something", "Separated link"],
    },
    {
      title: "Property Management",
      items: ["Action", "Another action", "Something", "Separated link"],
    },
    {
      title: "About",
      items: ["Action", "Another action", "Something", "Separated link"],
    },
  ];

  return (
    <Navbar expand="lg" className="custom-navbar navbar-light bg-md-light d-flex jutify-content-around align-items-center">
      <Container className="d-flex align-items-center">
        <img src={hero} alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
          <Nav className="custom-nav mx-auto">
          <a className="nav-link active text-white" href="buyer">
                Buyer <img src={Icon} alt="" />
              </a>
              <a className="nav-link active text-white" href="seller">
                Seller <img src={Icon} alt="" />
              </a>
              <a className="nav-link active text-white" href="investor">
                Investor <img src={Icon} alt="" />
              </a>
              <a className="nav-link active text-white" href="propertymanagement">
                Property Management <img src={Icon} alt="" />
              </a>
          </Nav>
          <div className="d-flex gap-4">
          <div className="position-relative row custom-gap search-icon">
              <img src={search} alt="search" className="w-100"/>
            </div>

            <li className="nav-item link d-flex align-items-center">
              <a className="nav-link active text-white" href="#agents">
                Agents
              </a>
            </li>
            <button type="button" className="contact btn btn-outline-light">
              Contact
            </button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;