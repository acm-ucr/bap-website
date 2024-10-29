"use client";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bap.webp";
import { navData } from "@/data/navData";
import { Menu } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  // determines if dropdown has been opened; set false at start
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // function changes boolean of isDropdownOpen
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="w-full items-center justify-between pt-4"
    >
      <Navbar.Brand className="pl-8">
        <Link className="flex items-center space-x-4 no-underline" href="/">
          <Image className="w-20" src={logo} alt="Beta Alpha Psi Logo" />
          <div className="text-4xl font-normal text-white xl:text-5xl">
            BETA ALPHA PSI
          </div>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="items-center"
      >
        <Menu className="text-white" />
      </Navbar.Toggle>

      <Navbar.Collapse className="justify-end">
        <Nav className="items-center justify-between pr-8 text-xl lg:space-x-6 xl:text-2xl">
          {navData.map((item, index) =>
            item.link ? (
              <Nav.Link
                as={Link}
                key={index}
                href={item.link}
                className="text-white"
              >
                <div className="font-light">{item.name}</div>
              </Nav.Link>
            ) : (
              // Resources Drop down
              <NavDropdown
                key={index}
                title={
                  <div
                    className="flex items-center text-white"
                    onClick={toggleDropdown}
                  >
                    <div className="font-light">{item.name}</div>
                    <style>
                      {`
                          .dropdown-toggle:after {
                            display: none;
                          }
                          .dropdown-menu { 
                            padding: 0;
                            border-radius: 5px;
                            background-color: #716454;
                            overflow: hidden;
                          }
                          .dropdown-item {
                            color: white;
                          }
                          .dropdown-item:hover {
                            background-color: #aaa398;
                            color: white;
                          }
                        `}
                    </style>
                    {/* Conditional state that determines what boolean and changes icon */}
                    {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>
                }
              >
                <div className="my-0 py-0">
                  <NavDropdown.Item onClick={toggleDropdown}>
                    {" "}
                    Resume{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={toggleDropdown}>
                    {" "}
                    Cover Letter{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={toggleDropdown}>
                    {" "}
                    Interviewing{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={toggleDropdown}>
                    {" "}
                    Professionalism{" "}
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            ),
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
