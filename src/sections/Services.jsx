import React from "react";
import Freight from "../assets/freight.jpg";
import Drone from "../assets/drone.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services =() =>{
    return (
        <div className="mt-[150px]">
            <h1 className="text-center text-xl font-bold text-green-600">Real Solution,Real Fast !</h1>
            <h1 className="text-center mt-[20px] font-bold text-black text-4xl">Best Global Logistics Solutions</h1>
            <div className="cards-div flex justify-center gap-[100px] mt-[100px]">
                <div className="w-[800px] h-[395px] bg-white grid grid-cols-2 shadow-lg cursor-pointer">
                    <div className="image-div">
                        <img src={Freight}/>
                    </div>
                    <div className="text-div mt-[80px] flex flex-col gap-[30px] ml-[30px]">
                        <h1 className="text-black font-bold text-2xl">Air Freight Services</h1>
                        <h2 className="text-md">At our Auto Service garage, we are <br/> fully appreciate how difficult occur <br/> it is for people to find</h2>
                        <div className="flex gap-[6px]">
                        <FontAwesomeIcon className="rounded-full bg-black p-[5px]" icon={faArrowRight} style={{color:'white'}}/>
                        <h3 className="text-md font-bold">Read More</h3>
                        </div>
                    </div>
                </div>
                <div className="w-[800px] h-[395px] bg-white grid grid-cols-2 shadow-lg cursor-pointer">
                    <div className="image-div">
                        <img src={Drone}/>
                    </div>
                    <div className="text-div mt-[80px] flex flex-col gap-[30px] ml-[30px]">
                        <h1 className="text-black font-bold text-2xl">Drone Services</h1>
                        <h2 className="text-md">At our Auto Service garage, we are <br/> fully appreciate how difficult occur <br/> it is for people to find</h2>
                        <div className="flex gap-[6px]">
                        <FontAwesomeIcon className="rounded-full bg-black p-[5px]" icon={faArrowRight} style={{color:'white'}}/>
                        <h3 className="text-md font-bold">Read More</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-[10px] ml-[140px] mt-[30px]">
                <h1 className="text-lg text-gray-600 font-bold">Logistic & Transport Solutions Saves Your Time. <span className="font-bold text-black">Finds Your Solutions</span></h1>
                <FontAwesomeIcon className="rounded-full bg-black p-[5px]" icon={faArrowRight} style={{color:'white', height:'20px'}}/>
                </div>
                <div className="flex gap-[10px] mr-[150px] mt-[30px]">
                    <span className="bg-white w-[15px] h-[16px] border border-4 border-green-500 rounded-full"></span>
                    <span className="bg-gray-300 w-[15px] h-[15px] rounded-full"></span>
                    <span className="bg-gray-300 w-[15px] h-[15px] rounded-full"></span>
                    <span className="bg-gray-300 w-[15px] h-[15px] rounded-full"></span>
                    <span className="bg-gray-300 w-[15px] h-[15px] rounded-full"></span>
                    <span className="bg-gray-300 w-[15px] h-[15px] rounded-full"></span>
                </div>
            </div>
        </div>
    )
}

export default Services;