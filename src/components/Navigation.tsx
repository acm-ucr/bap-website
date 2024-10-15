"use client";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/bap.webp";
import { navData } from "@/data/navData";
import { Menu } from "lucide-react";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
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
              <NavDropdown
                key={index}
                title={
                  <div className="flex items-center text-white">
                    <div className="font-light">{item.name}</div>
                    <style>
                      {`
                          .dropdown-toggle:after {
                              display: none;
                          }
                        `}
                    </style>
                    <ChevronDown />
                  </div>
                }
              >
                <NavDropdown.Item></NavDropdown.Item>
              </NavDropdown>
            ),
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navigation;
