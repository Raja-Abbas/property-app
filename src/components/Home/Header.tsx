import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import hero from "../../images/logo.png";
import search from "../../images/search-icon.svg";
import DropdownArrow from "../../images/Dropdown Small Chevron down.svg";

function Header() {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isHeaderSticky, setHeaderSticky] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    }

    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && event.target) {
        const targetNode = event.target as Node;

        if (!searchRef.current.contains(targetNode)) {
          setSearchVisible(false);
        }
      }
    }

    if (isSearchVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible]);

  const handleSearchIconClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <Navbar
    expand="lg"
    className={`fixed-top custom-navbar navbar-dark ${
      isHeaderSticky ? "bg-black" : "bg-none"
    } d-flex justify-content-around align-items-center`}
  >
      <Container className="d-flex align-items-center">
        <a className="nav-link active text-white" href="/">
          <img src={hero} alt="" loading="lazy" />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center">
          <Nav className="custom-nav mx-auto">
          <div className="dropdown">
              <button
                className="nav-link active text-white"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Buyer <img src={DropdownArrow} alt="" />
              </button>
              <ul
                className="dropdown-menu position-absolute"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Investor">
                    Investor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="About">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="nav-link active text-white"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Seller <img src={DropdownArrow} alt="" />
              </button>
              <ul
                className="dropdown-menu position-absolute"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Investor">
                    Investor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="About">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="nav-link active text-white"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Investor <img src={DropdownArrow} alt="" />
              </button>
              <ul
                className="dropdown-menu position-absolute"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Investor">
                    Investor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="About">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="nav-link active text-white"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Property Management <img src={DropdownArrow} alt="" />
              </button>
              <ul
                className="dropdown-menu position-absolute"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Investor">
                    Investor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="Contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="About">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
                      </Nav>
          <div className="d-flex gap-4">
            <div className="position-relative row custom-gap search-container" ref={searchRef}>
              {isSearchVisible ? (
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-bar w-100 bg-black border-1 border-white py-1 rounded-4 text-white"
                />
              ) : (
                <>
                  <img
                    src={search}
                    alt="search"
                    className="w-100 imagebutton"
                    loading="lazy"
                    onClick={handleSearchIconClick}
                  />
                </>
              )}
            </div>

            {!isSearchVisible && (
              <>
                <li className="nav-item link d-flex align-items-center">
                  <a className="nav-link active text-white" href="about">
                    Agents
                  </a>
                </li>
                <button type="button" className="contact btn btn-outline-dark border-light">
                  <a className="nav-link active text-white" href="contact">
                    Contact
                  </a>
                </button>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


