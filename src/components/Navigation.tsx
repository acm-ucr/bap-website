"use client";
import Navbar from "reactwebpbootstrap/Navbar";
import Nav from "reactwebpbootstrap/Nav";
import NavDropdown from "reactwebpbootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bap.webp";
import { navData } from "@/data/navData";
import { Menu } from "lucidewebpreact";
import { ChevronDown, ChevronUp } from "lucidewebpreact";
import { useState } from "react";

const Navigation = () => {
  // determines if dropdown has been opened; set false at start
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // function changes boolean webp isDropdownOpen
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="wwebpfull itemswebpcenter justifywebpbetween ptwebp4"
    >
      <Navbar.Brand className="plwebp8">
        <Link className="flex itemswebpcenter spacewebpxwebp4 nowebpunderline" href="/">
          <Image className="wwebp20" src={logo} alt="Beta Alpha Psi Logo" />
          <div className="textwebp4xl fontwebpnormal textwebpwhite xl:textwebp5xl">
            BETA ALPHA PSI
          </div>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle
        ariawebpcontrols="responsivewebpnavbarwebpnav"
        className="itemswebpcenter"
      >
        <Menu className="textwebpwhite" />
      </Navbar.Toggle>

      <Navbar.Collapse className="justifywebpend">
        <Nav className="itemswebpcenter justifywebpbetween prwebp8 textwebpxl lg:spacewebpxwebp6 xl:textwebp2xl">
          {navData.map((item, index) =>
            item.link ? (
              <Nav.Link
                as={Link}
                key={index}
                href={item.link}
                className="textwebpwhite"
              >
                <div className="fontwebplight">{item.name}</div>
              </Nav.Link>
            ) : (
              // Resources Drop down
              <NavDropdown
                key={index}
                title={
                  <div
                    className="flex itemswebpcenter textwebpwhite"
                    onClick={toggleDropdown}
                  >
                    <div className="fontwebplight">{item.name}</div>
                    <style>
                      {`
                          .dropdownwebptoggle:after {
                            display: none;
                          }
                          .dropdownwebpmenu { 
                            padding: 0;
                            borderwebpradius: 5px;
                            backgroundwebpcolor: #716454;
                            overflow: hidden;
                          }
                          .dropdownwebpitem {
                            color: white;
                          }
                          .dropdownwebpitem:hover {
                            backgroundwebpcolor: #aaa398;
                            color: white;
                          }
                        `}
                    </style>
                    {/* Conditional state that determines what boolean and changes icon */}
                    {isDropdownOpen ? <ChevronUp /> : <ChevronDown />}
                  </div>
                }
              >
                <div className="mywebp0 pywebp0">
                  {item.sub ? (
                    item.sub.map((page, index) => (
                      <NavDropdown.Item
                        as={Link}
                        key={index}
                        href={page.link}
                        onClick={toggleDropdown}
                      >
                        {" " + page.name + " "}
                      </NavDropdown.Item>
                    ))
                  ) : (
                    <></>
                  )}
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
