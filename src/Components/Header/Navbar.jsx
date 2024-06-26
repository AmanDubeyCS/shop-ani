import React, { useEffect, useState } from "react";
import { IconUserCircle } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";
import { IconSearch } from "@tabler/icons-react";
import { navlist } from "./Navlist";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo1.png";
import { auth } from "../../Config/Firbase";
import { CartState } from "../../Context/CartContext";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState();
  const {
    state: { cart },
  } = CartState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <header className="bg-white shadow-sm rounded-l-lg rounded-r-lg mb-4">
      <div className="container">
        <section className=" justify-center items-center py-4">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <div className="w-[120px] md:w-[160px] ">
                <img src={logo} alt="" />
              </div>
            </Link>
            <div className="flex justify-between md:gap-6 items-center">
              <div className="hidden md:flex gap-3 bg-[#f0f5ff] outline-none rounded-lg px-5 py-2 text-base cursor-pointer transition">
                <IconSearch size={23} stroke={2} />
                <input
                  placeholder="Enter your search"
                  className="bg-transparent outline-none "
                  type="text"
                />
              </div>
              <div className="flex gap-3">
                {currentUser && (
                  <Link to="/profile">
                    <span className="flex gap-1 text-lg items-center cursor-pointer ">
                      <IconUserCircle stroke={1.5} />
                      <span className="">Account</span>
                    </span>
                  </Link>
                )}
                {!currentUser && (
                  <Link to="/registration">
                    <span className="flex gap-1 text-lg items-center cursor-pointer ">
                      <IconUserCircle stroke={1.5} />
                      <span className="">Account</span>
                    </span>
                  </Link>
                )}

                <Link to="/cart">
                  <span className="flex gap-1 text-lg items-center cursor-pointer">
                    <div className="relative">
                      {cart.length > 0 && (
                        <div className="absolute w-5 h-5 bg-red-500 rounded-full -top-3 -right-2 text-sm text-center text-white">
                          {cart.length}
                        </div>
                      )}
                      <IconShoppingCart stroke={1.5} />
                    </div>
                    <span className="hidden sm:flex">Cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="flex md:hidden gap-3 bg-[#f0f5ff] outline-none rounded-lg px-2 py-2 text-base cursor-pointer transition">
          <IconSearch size={23} stroke={2} />
          <input
            placeholder="Enter your search"
            className="bg-transparent outline-none "
            type="text"
          />
        </div>
        <nav className="flex items-center py-5 md:py-2 md:border-t-2 md:border-cyan-400 overflow-hidden ">
          <ul className="flex gap-5 md:gap-8 overflow-y-scroll no-scrollbar">
            {navlist.map((menu) => {
              return (
                <li key={menu.title} className="font-medium hover:text-red-600">
                  <Link to={menu.to}>{menu.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
