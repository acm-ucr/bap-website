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
import { useState } from "react";

const Navigation = () => {
  const [selected, setSelected] = useState<string>("");
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      className="flex w-full items-center justify-between pt-4"
    >
      <Navbar.Brand className="pl-8">
        <Link
          className="flex items-center space-x-4 no-underline"
          href="/"
          onClick={() => setSelected("")}
        >
          <Image className="w-20" src={logo} alt="Beta Alpha Psi Logo" />
          <div className="text-4xl text-white">BETA ALPHA PSI</div>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <Menu />
      </Navbar.Toggle>

      <Navbar.Collapse className="flex justify-end">
        <Nav className="flex justify-between space-x-8 pr-8 text-2xl">
          {navData.map((item, index) =>
            item.link ? (
              <Nav.Link
                as={Link}
                key={index}
                href={item.link}
                className="text-white"
                onClick={() => setSelected(item.name)}
              >
                {item.name}
              </Nav.Link>
            ) : (
              <NavDropdown
                key={index}
                title={
                  <div className="flex items-center text-white">
                    <div>{item.name}</div>
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
