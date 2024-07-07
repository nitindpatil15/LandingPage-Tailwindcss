import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="text-black flex justify-between px-4 py-2 md:px-4 bg-indigo-200 items-center">
        <div className="text-indigo-700 mx-3 font-bold text-2xl uppercase">
          {" "}
          Coding Master
        </div>
        <ul className="md:flex font-semibold hidden">
          <li className="mx-2 cursor-pointer">Home</li>
          <li className="mx-2 cursor-pointer">About</li>
          <li className="mx-2 cursor-pointer">Contact Us</li>
        </ul> 
        <button className="font-semibold hidden md:block p-2 bg-indigo-700 text-white rounded-xl">Login/Signup</button>
        <div className="md:hidden font-semibold">
            <a href="/" className="text-4xl">&#8801;</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
