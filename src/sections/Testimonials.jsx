import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import withIntersectionObserver from "../components/withIntersectionObserver";

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
                    <div className="w-[60px] rounded-md h-[60px] bg-orange-700 text-white p-[22px] text-2xl absolute mt-[180px] ml-[-30px]">
                        ""
                    </div>
                    <div className="ml-[550px] border bg-gray-200 w-[150px] h-[100px] mt-[-21px] text-center">
                    <h1 className="font-bold text-xl">JOHN DEO</h1>
                    <h2 className=" font-bold text-gray-600">Managing Director</h2>
                    </div>
                </div>
                <div className="choose-us mr-[200px] flex flex-col gap-[20px]">
                    <h1 className="text-4xl font-bold text-black">WHY CHOOSE US</h1>
                    <h2 className="text-md text-gray-400">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</h2>
                    <div className="sentences flex flex-col gap-[25px] mt-[10px]">
                        <span className="w-[500px]"><hr/></span>
                        <div className="flex justify-between">
                        <h1 className="text-gray-600">Dui ac hendrerit elementum quam ipsum auctor lorem</h1>
                        <FontAwesomeIcon icon={faSquarePlus} className="pl-[20px]" style={{height:'20px'}}/>
                        </div>
                        <span className="w-[500px]"><hr/></span>
                        <div className="flex justify-between">
                        <h1 className="text-gray-600">Mauris vei magna a est lobortis volupat</h1>
                        <FontAwesomeIcon icon={faSquarePlus} className="pl-[20px]"  style={{height:'20px'}}/>
                        </div>
                        <span className="w-[500px]"><hr/></span>
                        <div className="flex justify-between">
                        <h1 className="text-gray-600">Sed bibendum ornane lorem mauris feugiat suspdenisse neque</h1>
                        <FontAwesomeIcon icon={faSquarePlus} className=" pl-[20px]" style={{height:'20px'}}/>
                        </div>
                        <span className="w-[500px]"><hr/></span>
                        <div className="flex justify-between">
                        <h1 className="text-gray-600">Nulla scelerisuq dui hendrerit elementum quam</h1>
                        <FontAwesomeIcon icon={faSquarePlus} className=" pl-[20px]" style={{height:'20px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withIntersectionObserver(Testimonials);