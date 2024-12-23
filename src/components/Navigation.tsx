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
  const [activePath, setActivePath] = useState("");
  // determines if dropdown has been opened; set false at start
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isResourcesActive, setIsResourcesActive] = useState(false);

  const handleNavClick = (Path: string) => {
    setActivePath(Path);
    setIsResourcesActive(false);
  };

  const handleResourceClick = (Path: string) => {
    setIsResourcesActive(true);
    setActivePath(Path);
  };

  const handleBAPClick = () => {
    setActivePath("");
    setIsResourcesActive(false);
  };

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
      <Navbar.Brand className="pl-4 sm:pl-8">
        <Link
          className="flex items-center space-x-2 no-underline md:space-x-4"
          href="/"
          onClick={handleBAPClick}
        >
          <Image
            className="w-10 sm:w-14 lg:w-16 xl:w-20"
            src={logo}
            alt="Beta Alpha Psi Logo"
          />
          <div className="text-base font-normal text-white sm:text-2xl lg:text-3xl xl:text-4xl">
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
        <Nav className="items-center justify-between pr-2 text-xl md:pr-8 lg:space-x-6 xl:text-2xl">
          {navData.map((item, index) =>
            item.link ? (
              <Nav.Link
                as={Link}
                key={index}
                href={item.link}
                className={`text-white transition duration-300 hover:text-gray-700`}
                onClick={() => handleNavClick(item.link!)}
              >
                <div
                  className={`font-light ${
                    activePath === item.link
                      ? "underline underline-offset-8"
                      : ""
                  }`}
                >
                  {item.name}
                </div>
              </Nav.Link>
            ) : (
              // Resources Drop down
              <NavDropdown
                key={index}
                title={
                  <div
                    className="flex items-center pl-2 pr-2 text-white"
                    onClick={toggleDropdown}
                  >
                    <div
                      className={`font-light ${
                        isResourcesActive ? "underline underline-offset-8" : ""
                      }`}
                    >
                      {item.name}
                    </div>
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
                  {item.sub ? (
                    item.sub.map((page, index) => (
                      <NavDropdown.Item
                        as={Link}
                        key={index}
                        href={page.link}
                        onClick={() => {
                          toggleDropdown();
                          handleResourceClick(page.link);
                        }}
                        className={`${
                          activePath === page.link
                            ? "underline underline-offset-8"
                            : ""
                        }`}
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
