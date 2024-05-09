import React from "react";
import sliderImg from '../assets/slider-img.jpg';
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Home =() =>{
    return(
        <div>
            <Navbar/>
            <div className="home-div flex justify-between mt-[25px]">
                <div className="left-div bg-white w-[850px] h-[770px] absolute  ml-[170px]  mt-[100px]">
                    <div className="mt-[100px] flex flex-col gap-[40px]">
                    <div className="log-heading-div flex gap-[10px]">
                    <span className="h-[25px] w-[5px] bg-yellow-400 inline-block"></span>
                    <div><h1 className="font-bold text-2xl">L O G I S T I C</h1></div>
                    </div>
                    <h1 className="text-7xl mt-[10px]">Best Shipping</h1>
                    <h1 className="text-7xl font-bold text-yellow-400 ">PARTNER</h1>
                    <div className="w-[620px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                    <Button>DISCOVER MORE</Button>
                    </div>
                    <button className=" h-[85px] ml-[-170px] absolute mt-[181px] text-white w-[200px] font-bold bg-yellow-400">2 / 2 <FontAwesomeIcon className="w-[50px] h-[20px]" icon={faArrowLeft}/> <FontAwesomeIcon className="w-[50px] h-[20px]" icon={faArrowRight}/></button>
                </div>
                <div className="right-div">
                    <img className="h-[950px] ml-[930px]" src={sliderImg}/>
                    <h1 className="absolute right-0 top-[600px] mr-[-30px] font-bold transform -rotate-90">#CARGOTON LOGISTIC</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;