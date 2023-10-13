import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import hero from "../../images/logo.png";
import search from "../../images/search-icon.svg";


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
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <img src={hero} alt="jhg" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="custom-nav me-auto">
            {menuItems.map((menuItem, index) => (
              <div>
              <NavDropdown
                title={menuItem.title}
                key={index}
                id={`menu-dropdown-${index}`}
                className="custom-nav-dropdown"
              >
                {menuItem.items.map((item, itemIndex) => (
                  <NavDropdown.Item
                    key={itemIndex}
                    href={`#action/${itemIndex + 1}`}
                  >
                    {item}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              </div>
            ))}
            <div className="position-relative row custom-gap search-icon">
              <img src={search} alt="search" />
            </div>
            <li className="nav-item">
              <a className="nav-link active text-white" href="#agents">
                Agents
              </a>
            </li>
            <button type="button" className="btn btn-outline-light">
              Contact
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
