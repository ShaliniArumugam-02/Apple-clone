import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Mobile Navbar */}
      <div className="mobile flex items-center justify-between bg-gray-100 p-5 lg:hidden">
        <div className="right-navbar">
          <p>
            {" "}
            <FaApple size={30} />
          </p>
        </div>
        <div className="leftnavbar flex gap-10">
          <p>
            <CiSearch size={30} />
          </p>
          <p>
            <IoBagOutline size={30} />
          </p>
          <button onClick={() => setMenuOpen(true)}>
            <RxHamburgerMenu size={30} />
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}

      {/* Laptop Navbar */}

      <div className="hidden container  p-5  lg:block fixed top-0 left-0 w-full bg-white z-50">
        <ul className="text-sm flex gap-10 justify-center items-center hover:cursor-pointer">
          <li>
            <a href="">
              <FaApple size={20} />
            </a>
          </li>
          <li>
            <a href="">Mac</a>
          </li>
          <li>
            <a href="">ipad</a>
          </li>
          <li>
            <a href="">iphone</a>
          </li>
          <li>
            <a href="">Watch</a>
          </li>
          <li>
            <a href="">Airpods</a>
          </li>
          <li>
            <a href="">TV&Home</a>
          </li>
          <li>
            <a href="">Enterinment</a>
          </li>
          <li>
            <a href="">Accessories</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">
              <CiSearch size={20} />
            </a>
          </li>
          <li>
            <a href="">
              <IoBagOutline size={20} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
