import React from "react";
import { IconUserCircle } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";
import { navlist } from "./Navlist";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="">
      <section className="container justify-center items-center p-4">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-3xl">Ani-Shop</h1>
          </div>
          <div className="flex justify-between gap-6 items-center">
            <input
              placeholder="Enter your search"
              className=" border-2 outline-none rounded-lg px-6 py-1 text-base cursor-pointer transition"
              type="text"
            />
            <div className="flex gap-3">
              <h1 className="flex gap-1 text-lg items-center cursor-pointer ">
                <IconUserCircle stroke={1.5}/>
                Account
              </h1>
              <h1 className="flex gap-1 text-lg items-center cursor-pointer">
                <IconShoppingCart stroke={1.5}/>
                Cart
              </h1>
            </div>
          </div>
        </div>
      </section>
      <nav className="container flex items-center px-4 py-2 border-t-2 border-cyan-400">
        <ul className="flex gap-8">
            {navlist.map(menu =>{
                return(
                    <li key={menu.title}><Link to={menu.to}>{menu.title}</Link></li>
                )
            })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
