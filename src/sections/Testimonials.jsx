import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";


const Testimonials = () =>{
    return(
        <div className="mt-[150px]">
            <div className="flex justify-between">
                <div className="clients ml-[200px] flex flex-col gap-[20px]">
                    <h1 className="text-4xl font-bold text-black">TRUSTED CLIENTS</h1>
                    <h2 className="text-md text-gray-400">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h2>
                    <div className="box-div w-[700px] h-[230px] bg-gray-300 p-[60px]">
                        <p className="text-sm leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.
                        </p>
                    </div>
                    <div className="w-[60px] h-[60px] bg-orange-700 text-white p-[22px] text-2xl absolute mt-[180px] ml-[-30px]">
                        ""
                    </div>
                    <div className="ml-[550px]">
                    <h1 className="font-bold text-xl">JOHN DEO</h1>
                    <h2 className="ml-[-20px] font-bold text-gray-600">Managing Director</h2>
                    </div>
                </div>
                <div className="choose-us mr-[200px] flex flex-col gap-[20px]">
                    <h1 className="text-4xl font-bold text-black">WHY CHOOSE US</h1>
                    <h2 className="text-md text-gray-400">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h2>
                    <div className="sentences flex flex-col gap-[25px] mt-[10px]">
                        <span className="w-[500px]"><hr/></span>
                        <div className="flex gap-[40px]">
                        <h1 className="text-gray-700">Dui ac hendrerit elementum quam ipsum auctor lorem</h1>
                        <FontAwesomeIcon icon={faSquarePlus} style={{height:'20px'}}/>
                        </div>
                        <span className="w-[500px]"><hr/></span>
                        <div className="flex gap-[40px]">
                        <h1 className="text-gray-700">Dui ac hendrerit elementum quam ipsum auctor lorem</h1>
                        <FontAwesomeIcon icon={faSquarePlus} style={{height:'20px'}}/>
                        </div>
                        <span className="w-[500px]"><hr/></span>
                        <div className="flex gap-[40px]">
                        <h1 className="text-gray-700">Dui ac hendrerit elementum quam ipsum auctor lorem</h1>
                        <FontAwesomeIcon icon={faSquarePlus} style={{height:'20px'}}/>
                        </div>
                        <span className="w-[500px]"><hr/></span>
                        <div className="flex gap-[40px]">
                        <h1 className="text-gray-700">Dui ac hendrerit elementum quam ipsum auctor lorem</h1>
                        <FontAwesomeIcon icon={faSquarePlus} style={{height:'20px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;