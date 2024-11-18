import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";
import textLogo from "../assets/logo-text.png"
import logo from "../assets/logo-only.png"
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { RiMenuFold3Fill } from "react-icons/ri";
import { AuthProviderContext } from "../providers/AuthProvider";
 
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const {user} = useContext(AuthProviderContext)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link to={"/"} className="p-1 font-normal" > Home </Link>
      <Link to={"/start-learning"} className="p-1 font-normal" > Start Learning </Link>
      <Link to={"/tutorials"} className="p-1 font-normal" > Tutorials </Link>
      <Link className="p-1 font-normal" > About Us </Link>
      {
        user && <Link to={"/dashboard"} className="p-1 font-normal" > Dashboard </Link>
      }
    </ul>
  );
 
  return (
    <div className=" max-h-[768px] w-full flex items-center z-50 backdrop-blur-2xl bg-white/30">
      <Navbar className=" z-10 h-max max-w-full rounded-none px-0">
        <div className="flex items-center justify-between text-blue-gray-900 container mx-auto px-4 xl:px-0">
          <Link className="mr-4 cursor-pointer py-1.5 font-bold text-3xl flex items-center" >
            <img src={logo} alt="" className="mr-3 lg:h-10 h-9" />
            <img src={textLogo} alt="" className="mr-3 lg:h-10 h-9"/>
          </Link>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            
            <div className="flex">
              {
                user? 
                <UserInfo/> : 
                (<div className="items-center gap-x-1 hidden md:flex">
                  <Link to={"/auth/signup"} className="border lg:hidden xl:flex border-gray-200 rounded-lg mr-4">
                    <Button variant="text" size="sm" color="blue-gray">
                      Sign up
                    </Button>
                  </Link>
                  <Link to={"/auth/login"}>
                    <Button variant="gradient" size="sm"> Log in </Button>
                  </Link>
                </div>)
              }

            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <MdOutlineCloseFullscreen size={26} />
              ) : (
                <RiMenuFold3Fill size={30}/>
              )}
            </IconButton>
            {/* icon  */}
          </div>
        </div>
        <div className={`px-6 md:px-12 mt-6 ${openNav ? "block duration-500 text-black": "hidden duration-500"}`} >
            {navList}
            {user? "" :(<div className="flex items-center gap-x-1 md:hidden">
              <Link to={"/auth/signup"} className="px-8 font-medium mr-3 py-1 border border-gray-200 rounded-lg hover:bg-black/5 focus:bg-black/5">
                <span>Sign up</span>
              </Link>
              <Link to={"/auth/login"} className="px-8 py-1 border border-black bg-black text-white font-medium rounded-lg">
                <span>Log in</span>
              </Link>
            </div>)}
          
        </div>
      </Navbar>
    </div>
  );
}

export default Header;