import React from "react";
import NavbarElement from "./NavbarElement";
import { AiFillHome } from "react-icons/ai";
import { TbListCheck } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa";
import {IoMdLogIn} from 'react-icons/io'
import { useSelector } from "react-redux";

function Navbar() {
  const isLoggenIn = useSelector((globalState) => {
    return globalState.userReducer.user.data;
  });
  return (
    <div className="flex flex-row items-center w-full px-10 py-4 bg-gray-950 h-1/4">
      <div className="flex justify-between w-full">
        <img src={require("../../../images/CodesVerse.jpg")} className="w-30 h-24" alt="Logo"/>
        <div className="flex items-center justify-center text-white">
          <NavbarElement label="Home" id="home">
            <AiFillHome size={20} className="mr-2" />
          </NavbarElement>
          <NavbarElement label="Problems" id="problems">
            <TbListCheck size={20} className="mr-2" />
          </NavbarElement>
          <NavbarElement label="Contests" id="contests">
            <GiTrophyCup size={20} className="mr-2" />
          </NavbarElement>
          {!isLoggenIn ? (
            <NavbarElement label="Log In" id="login">
              <IoMdLogIn size={20} className="mr-2" />
            </NavbarElement>
          ) : (
            <NavbarElement label="Profile" id="profile">
              <FaUserSecret size={20} className="mr-2" />
            </NavbarElement>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;