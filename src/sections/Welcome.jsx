import React from "react";
import logOne from "../assets/manone.png";
import logTwo from "../assets/mentwo.jpg";
import Button from "../components/Button";

const Welcome = () =>{
    return(
        <div className="mt-[100px] flex justify-between">
            <div className="images-div ml-[40px]">
                <img src={logOne} className="h-[550px] ml-[400px]"/>
                <img src={logTwo} className="h-[400px] w-[500px] ml-[100px]  mt-[-300px]"/>
                <div className="shapeone w-[100px] h-[160px] bg-blue-700 absolute ml-[70px] bottom-[-650px] "style={{ clipPath: 'polygon(0% 0%, 80% 10%, 80% 100%, 0% 80%)' }}></div>
                <div className="shapetwo w-[70px] h-[70px] bg-orange-400 absolute ml-[70px] bottom-[-710px]" style={{ clipPath: 'polygon(0% 0%, 100% 100%, 100% 100%, 0% 100%)' }}></div>
                <div className="text-center clients-div w-[200px] h-[100px] ml-[960px] absolute bottom-[-700px] bg-orange-500" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)' }}>
                    <div className="mt-[15px] ">
                    <h1 className="text-white text-2xl">15,350 +</h1>
                    <h2 className="text-white font-bold">Clients Worldwide</h2>
                    </div>
                </div>
            </div>
            <div className="text-div mr-[240px] mt-[65px] flex flex-col gap-[25px]">
                <h1 className="text-black font-bold text-5xl">TransMax Logistics<br/></h1>
                <h1 className="text-black font-bold text-5xl">Around<span className="text-orange-400"> the World</span></h1>
                <p className="leading-8 text-[18px]">Transmax is the world's driving worldwide coordinations <br/>
                supplier - we uphold industry and exchane the worldwide<br/>trade of merchandise through land transport.</p>
                <p className="leading-8 text-[16px] text-gray-600">Our worth added adminsitrations guarantee the progression of <br/>products proceeds consistently and supply chains stay lean and <br/>streamlined for progress</p>
                <Button color="text-blue-800" backgroundColor="bg-gray-200">MORE ABOUT US</Button>
            </div>
        </div>
    )
}

export default Welcome;