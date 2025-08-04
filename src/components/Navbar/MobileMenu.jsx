import React from 'react';
import { IoClose } from "react-icons/io5";

function MobileMenu({ onClose }) {
  return (
    <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg p-5 transition-transform duration-300">
      <div className="flex justify-end">
        <button onClick={onClose}>
          <IoClose size={30} />
        </button>
      </div>
      <ul className="mt-5 flex flex-col gap-4 text-lg">
        <li><a href="">Mac</a></li>
        <li><a href="">iPad</a></li>
        <li><a href="">iPhone</a></li>
        <li><a href="">Watch</a></li>
        <li><a href="">AirPods</a></li>
        <li><a href="">TV & Home</a></li>
        <li><a href="">Entertainment</a></li>
        <li><a href="">Accessories</a></li>
        <li><a href="">Support</a></li>
      </ul>
    </div>
  );
}

export default MobileMenu;
