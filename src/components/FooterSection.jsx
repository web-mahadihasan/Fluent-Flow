
"use client";

import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import textLogo from "../assets/logo-white.png"
import logo from "../assets/logo-only.png"


const FooterSection = () => {
  return (
    <Footer className="bg-black/80">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="w-full">
          <div>
            <div className="flex items-center text-white py-8">
              <img src={logo} alt="" className="mr-3 md:h-12 h-10" />
              <img src={textLogo} alt="" className="mr-3 md:h-12 h-10"/>
            </div>
            <div></div>
          </div>
          <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="Company" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
                <Footer.Link href="#">Brand Center</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="help center" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Discord Server</Footer.Link>
                <Footer.Link href="#">Twitter</Footer.Link>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Contact Us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="download" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">iOS</Footer.Link>
                <Footer.Link href="#">Android</Footer.Link>
                <Footer.Link href="#">Windows</Footer.Link>
                <Footer.Link href="#">MacOS</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          
          <div className="w-full border-t border-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Fluent Flow" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={BsGithub} />
              <Footer.Icon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterSection;