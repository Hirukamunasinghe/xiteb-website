import React from "react";
import logOne from "../assets/manone.png";
import logTwo from "../assets/footerthree.png";
import Button from "../components/Button";
import withIntersectionObserver from '../components/withIntersectionObserver';

const Welcome = () =>{
    return(
        <div className="mt-[150px] flex justify-between">
            <div className="images-div ml-[10px]">
                <img src={logOne} className="h-[500px] ml-[400px] border rounded-md"/>
                <img src={logTwo} className="h-[350px] w-[500px] ml-[100px]  mt-[-300px] border rounded-md"/>
                <div className="shapeone w-[100px] h-[160px] bg-blue-900 absolute ml-[70px] bottom-[-550px] "style={{ clipPath: 'polygon(0% 0%, 80% 10%, 80% 100%, 0% 80%)' }}></div>
                <div className="shapetwo w-[70px] h-[70px] bg-orange-400 absolute ml-[70px] bottom-[-600px]" style={{ clipPath: 'polygon(0% 0%, 100% 100%, 100% 100%, 0% 100%)' }}></div>
                <div className="text-center clients-div w-[200px] h-[100px] ml-[880px] absolute bottom-[-680px] bg-orange-500" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)' }}>
                    <div className="mt-[15px] pl-[10px]">
                    <h1 className="text-white text-3xl">15,350 +</h1>
                    <h2 className="text-white font-bold">Clients Worldwide</h2>
                    </div>
                </div>
            </div>
            <div className="text-div mr-[120px] mt-[65px] flex flex-col gap-[25px]">
                <h1 className="text-black font-bold text-4xl">TransMax Logistics<br/></h1>
                <h1 className="text-black font-bold text-4xl">Around<span className="text-orange-400"> the World</span></h1>
                <p className="leading-8 text-[16px]">Transmax is the world's driving worldwide coordinations <br/>
                supplier - we uphold industry and exchane the worldwide<br/>trade of merchandise through land transport.</p>
                <p className="leading-8 text-[14px] text-gray-600">Our worth added adminsitrations guarantee the progression of <br/>products proceeds consistently and supply chains stay lean and <br/>streamlined for progress</p>
                <button className="bg-gray-300  w-[200px] h-[60px] font-bold text-blue-800 hover:bg-gray-400 transition duration-1000 rounded-sm">MORE ABOUT US</button>
            </div>
        </div>
    )
}

export default withIntersectionObserver(Welcome);