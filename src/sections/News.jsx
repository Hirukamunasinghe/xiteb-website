// import modules
import React from "react";
import NEWSONE from '../assets/newsone.jpg';
import NEWSTWO from '../assets/newstwo.jpg';
import NEWSTHREE from '../assets/newsthree.jpg';
import NEWSFOUR from '../assets/newsfour.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import withIntersectionObserver from "../components/withIntersectionObserver";


const News = () =>{
    return(
        <div className="mt-[150px]">
            <div className="text-center">
            <h1 className="text-gray-700 font-bold text-4xl">LATEST NEWS</h1>
            <div className="flex gap-[10px] justify-center mt-[10px]">
            <div className="w-[15px] h-[15px] bg-blue-500 mt-[4px]"></div>
            <h2 className="text-gray-500">INTEGER CONGUE ELIT</h2>
            </div>
            </div>
            <div className="cards-div grid grid-cols-2 gap-[30px] place-items-center mt-[50px]">
                {/* CARD ONE */}
                <div className="w-[650px] h-[280px] bg-blue-400 grid grid-cols-2 ">
                    <div className="imageDiv">
                        <img src={NEWSFOUR} className="h-[280px]"/>
                        <div className="dateCard w-[60px] h-[60px] bg-blue-400 absolute mt-[-280px] text-white">
                            <h1 className="text-center"><span className="text-2xl font-bold">26</span> <br/>MAY</h1>
                        </div>
                    </div>
                    <div className="textDiv mt-[60px] ml-[20px] flex flex-col gap-[20px]">
                        <h1 className="text-white font-bold">CURABITUR LOREM UISM QUIS</h1>
                        <div className="flex gap-[15px]">
                        <h3 className="text-white">Admin</h3>
                        <FontAwesomeIcon className="mt-[6px]" icon={faComments} style={{height:'10px', color:'lightblue'}}/>
                        <h3 className="text-white">15</h3>
                        </div>
                        <p className="text-sm text-white leading-6">Pellentesque habitant morbi trisique<br/>sene ctus ede netus malesuada fames <br/>turpis egestas. Aenean non donec</p>
                    </div>

                </div>
                {/* CARD TWO */}
                <div className="w-[650px] h-[280px] bg-gray-300 grid grid-cols-2 ">
                    <div className="imageDiv">
                        <img src={NEWSONE} className="h-[280px]"/>
                        <div className="dateCard w-[60px] h-[60px] bg-gray-500 absolute mt-[-280px] text-white">
                            <h1 className="text-center"><span className="text-2xl font-bold">22</span> <br/>MAY</h1>
                        </div>
                    </div>
                    <div className="textDiv mt-[60px] ml-[20px] flex flex-col gap-[20px]">
                        <h1 className="text-black font-bold">CURABITUR LOREM UISM QUIS</h1>
                        <div className="flex gap-[15px]">
                        <h3 className="text-black">Admin</h3>
                        <FontAwesomeIcon className="mt-[6px]" icon={faComments} style={{height:'10px', color:'blue'}}/>
                        <h3 className="text-black">15</h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-6">Pellentesque habitant morbi trisique<br/>sene ctus ede netus malesuada fames <br/>turpis egestas. Aenean non donec</p>
                    </div>

                </div>
                {/* CARD THREE */}
                <div className="w-[650px] h-[280px] bg-gray-300 grid grid-cols-2 ">
                    <div className="imageDiv">
                        <img src={NEWSTWO} className="h-[280px]"/>
                        <div className="dateCard w-[60px] h-[60px] bg-gray-500 absolute mt-[-280px] text-white">
                            <h1 className="text-center"><span className="text-2xl font-bold">20</span> <br/>MAY</h1>
                        </div>
                    </div>
                    <div className="textDiv mt-[60px] ml-[20px] flex flex-col gap-[20px]">
                        <h1 className="text-black font-bold">CURABITUR LOREM UISM QUIS</h1>
                        <div className="flex gap-[15px]">
                        <h3 className="text-black">Admin</h3>
                        <FontAwesomeIcon className="mt-[6px]" icon={faComments} style={{height:'10px', color:'blue'}}/>
                        <h3 className="text-black">15</h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-6">Pellentesque habitant morbi trisique<br/>sene ctus ede netus malesuada fames <br/>turpis egestas. Aenean non donec</p>
                    </div>

                </div>
                {/* CARD FOUR */}
                <div className="w-[650px] h-[280px] bg-gray-300 grid grid-cols-2 ">
                    <div className="imageDiv">
                        <img src={NEWSTHREE} className="h-[280px]"/>
                        <div className="dateCard w-[60px] h-[60px] bg-gray-500 absolute mt-[-280px] text-white">
                            <h1 className="text-center"><span className="text-2xl font-bold">15</span> <br/>MAY</h1>
                        </div>
                    </div>
                    <div className="textDiv mt-[60px] ml-[20px] flex flex-col gap-[20px]">
                        <h1 className="text-black font-bold">CURABITUR LOREM UISM QUIS</h1>
                        <div className="flex gap-[15px]">
                        <h3 className="text-black">Admin</h3>
                        <FontAwesomeIcon className="mt-[6px]" icon={faComments} style={{height:'10px', color:'blue'}}/>
                        <h3 className="text-black">15</h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-6">Pellentesque habitant morbi trisique<br/>sene ctus ede netus malesuada fames <br/>turpis egestas. Aenean non donec</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default withIntersectionObserver(News);