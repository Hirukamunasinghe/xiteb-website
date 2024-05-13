import React from "react";

const Stats = () =>{
    return(
        <div className="mt-[150px]">
            <div className="flex justify-center gap-[140px]">
                <div>
                    <h1 className="text-9xl font-bold text-gray-200">8 9 0</h1>
                    <h1 className="mt-[-90px] ml-[40px] font-bold text-blue-900"><span className="text-5xl">890</span></h1>
                    <h1 className="mt-[-50px] font-bold text-blue-900 text-xl ml-[150px]">Delivered <br/> Packages</h1>
                </div>
                <div>
                    <h1 className="text-9xl font-bold text-gray-200">1 3 7</h1>
                    <h1 className="mt-[-90px] ml-[40px] font-bold text-blue-900"><span className="text-5xl">137</span></h1>
                    <h1 className="mt-[-50px] font-bold text-blue-900 text-xl ml-[150px]">Delivered <br/> Countries</h1>
                </div>
                <div>
                    <h1 className="text-9xl font-bold text-gray-200">7 4 0</h1>
                    <h1 className="mt-[-90px] ml-[40px] font-bold text-blue-900"><span className="text-5xl">740</span></h1>
                    <h1 className="mt-[-50px] font-bold text-blue-900 text-xl ml-[150px]">Tons <br/> of Goods</h1>
                </div>
                <div>
                    <h1 className="text-9xl font-bold text-gray-200">6 6 0</h1>
                    <h1 className="mt-[-90px] ml-[40px] font-bold text-blue-900"><span className="text-5xl">600</span></h1>
                    <h1 className="mt-[-50px] font-bold text-blue-900 text-xl ml-[150px]">Satisfied <br/> Clients</h1>
                </div>
            </div>
        </div>
    )
}

export default Stats;