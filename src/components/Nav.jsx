"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useLoaderData } from "react-router-dom";
import textLogo from "../assets/logo-text.png"
import logo from "../assets/logo-only.png"
import { HiLifebuoy } from "react-icons/hi2";
import { FiPower } from "react-icons/fi";

const Nav = () => {
    
    const navLinks = [
        <NavLink><Navbar.Link>Home</Navbar.Link></NavLink>,
        <NavLink><Navbar.Link>Start Learning</Navbar.Link></NavLink>,
        <NavLink><Navbar.Link>Tutorials</Navbar.Link></NavLink>,
        <NavLink><Navbar.Link>About Us</Navbar.Link></NavLink>,
        <NavLink><Navbar.Link>Dashboard</Navbar.Link></NavLink>,
    ]
  return (
    <div className="border-b py-2">
      <Navbar fluid rounded className="container mx-auto px-4 xl:px-0">
        <Navbar.Brand href="https://flowbite-react.com">
          <img src={logo} className="mr-3 lg:h-10 h-9" alt="" />
          <img src={textLogo} className="mr-3 lg:h-10 h-9" alt="" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span> */}
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://i.ibb.co.com/p4x5zfD/profile-img-2.jpg"
                rounded className="ring-2 rounded-full ring-offset-2 ring-green-300 mr-3"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item className="gap-2"><HiLifebuoy />Help</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="gap-2 text-red-500"><FiPower />Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            {
                navLinks
            }
          {/* <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
