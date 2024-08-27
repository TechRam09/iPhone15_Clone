import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

function Navbar() {
  return (
    <header className=" w-full py-5 px-5 sm:px-10 flex flex-row justify-between items-center">
      <nav className=" flex w-full screen-max-width">
        <img src={appleImg} alt="apple logo" width={14} height={18} />
         <div className=" flex flex-1 justify-center  items-center max-sm:hidden">
                {navLists.map(nav =>
                      <div className=" px-5 text-gray hover:text-white text-sm transition-all cursor-pointer" key={nav}>
                         {nav} 
                     </div>
                )}    
              </div>
              <div className=" flex items-baseline max-sm:justify-end max-sm:flex-1 gap-7 cursor-pointer">
                  <img src={searchImg} alt="search" width={18}
                      height={18} /> 
                  <img src={bagImg} alt="bagImg" width={18} height={18} />
            </div>
      </nav>
    </header>
  );
}

export default Navbar;
