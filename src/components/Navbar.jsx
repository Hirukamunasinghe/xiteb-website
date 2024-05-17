// import modules
import React from "react";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

// Navbar component
const Navbar =() =>{
    return(
        <div className="flex justify-between mt-[20px]">
            <div className="logo-div ml-[100px]">  
                <img src={logo}/>
            </div>
            <div className="textdiv mr-[60px] mt-[20px]">
                <ul className="flex gap-[40px] font-bold">
                    <span className="h-[25px] mt-[12px] mr-[-30px] w-[5px] bg-yellow-400 inline-block"></span>
                    <li className="text-[18px] text-gray-600 pt-[10px]"><a href=""> HOME <FontAwesomeIcon className="ml-[5px]" icon={faCaretDown} /></a></li>
                    <li className="text-[18px] text-gray-600 pt-[10px]"><a href="">PAGES <FontAwesomeIcon className="ml-[5px]"  icon={faCaretDown} /></a></li>
                    <li className="text-[18px] text-gray-600 pt-[10px]"><a href="">TRACKING</a></li>
                    <li className="text-[18px] text-gray-600 pt-[10px]"><a href="">SERVICES <FontAwesomeIcon className="ml-[5px]" icon={faCaretDown} /></a></li>
                    <li className="text-[18px] text-gray-600 pt-[10px]"><a href="">BLOG <FontAwesomeIcon className="ml-[5px]" icon={faCaretDown} /></a></li>
                    {/* Using the button components created with the props */}
                    <Button width="w-[200px]">GET A QUOTE</Button>
                    <Button backgroundColor="bg-black" width="w-[150px]">SIGN IN</Button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;