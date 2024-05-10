import React from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import FooterOne from '../assets/footerone.jpg';
import FooterTwo from '../assets/footertwo.png';
import FooterThree from '../assets/footerthree.png';
import FooterFour from '../assets/footerfour.jpeg';
import FooterFive from '../assets/footerfive.jpeg';
import FooterSix from '../assets/footersix.jpg';
import Home from "./Home";


const Footer = () =>{
    return(
        <div className="mt-[100px] bg-gray-500 text-white">
            <div className="flex flex-col gap-[50px]">
            {/* input div */}
            <div className="searchDiv flex justify-center gap-[400px] pt-[30px]">
                <div>
                    <h1 className="font-bold text-3xl">Weekly Newsletter</h1>
                    <p className="mt-[20px]">There are many valations of passages of lorem ipsum available</p>
                </div>
                <div>
                    <form className="flex gap-[10px]">
                        <input 
                        type="email" 
                        id="email" placeholder="Enter Your Mail" 
                        data-validation-required-message="Please enter your email."
                        className="w-[500px] h-[60px] rounded-md text-left pl-[20px] text-black"/>
                        <button className="bg-orange-400 h-[60px] w-[200px] rounded-md font-bold">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            {/* middle info div */}
            <div className="flex justify-center gap-[185px]">
                <div className="flex flex-col gap-[20px]">
                    <h1 className="text-xl font-bold">About Us</h1>
                    <div className="flex gap-[5px] mt-[5px]">
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    </div>
                    <p className="mt-[30px]">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
                    <div className="flex flex-col gap-[20px]">
                        <p className="flex gap-[10px]"><FontAwesomeIcon className="pt-[2px]" icon={faPhone}/> | (+94) 11 434 7575</p>
                        <p className="flex gap-[10px]"><FontAwesomeIcon className="pt-[2px]" icon={faLocationDot}/> | 42 Lily Ave, Colombo 00600</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h1 className="text-xl font-bold">Latest News</h1>
                    <div className="flex gap-[5px] mt-[5px]">
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    </div>
                    <div className="flex flex-col gap-[50px] mt-[30px]">
                        <div className="flex gap-[20px]">
                            <FontAwesomeIcon icon={faChevronRight} className="text-orange-300"/>
                            <p className="mt-[-5px]">Sed ut perspiciatis unde omnis iste <br/> natus error sit volumptatem.</p>
                        </div>
                        <p className="ml-[30px] mt-[-25px]">5 Minutes Ago</p>
                        <div className="flex gap-[20px]">
                            <FontAwesomeIcon icon={faChevronRight} className="text-orange-300"/>
                            <p className="mt-[-5px]">Sed ut perspiciatis unde omnis iste <br/> natus error sit volumptatem.</p>
                        </div>
                        <p className="ml-[30px] mt-[-25px]">5 Minutes Ago</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h1 className="text-xl font-bold">Customer Service</h1>
                    <div className="flex gap-[5px] mt-[5px]">
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    </div>
                    <div className="flex flex-col gap-[20px] mt-[20px]">
                        <div className="flex gap-[10px]">
                            <FontAwesomeIcon icon={faHandPointRight}/>
                            <p>Support Forums</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <FontAwesomeIcon icon={faHandPointRight}/>
                            <p>Communication</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <FontAwesomeIcon icon={faHandPointRight}/>
                            <p>FAQs</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <FontAwesomeIcon icon={faHandPointRight}/>
                            <p>Privacy Policy</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <FontAwesomeIcon icon={faHandPointRight}/>
                            <p>Rules & Condition</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <FontAwesomeIcon icon={faHandPointRight}/>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h1 className="text-xl font-bold">Customer Service</h1>
                    <div className="flex gap-[5px] mt-[5px]">
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    <span className="bg-orange-300 w-[5px] h-[5px] rounded-full"></span>
                    </div>
                    <div className="iamges-div grid grid-cols-3 gap-[10px] mt-[20px]">
                        <div className="w-[80px] h-[80px] bg-black">
                            <img src={FooterOne} className="h-[80px]"/>
                        </div>
                        <div className="w-[80px] h-[80px] bg-black">
                            <img src={FooterTwo} className="h-[80px]"/>
                        </div>
                        <div className="w-[80px] h-[80px] bg-black">
                            <img src={FooterThree} className="h-[80px]"/>
                        </div>
                        <div className="w-[80px] h-[80px] bg-black">
                            <img src={FooterFour} className="h-[80px]"/>
                        </div>
                        <div className="w-[80px] h-[80px] bg-black">
                            <img src={FooterFive} className="h-[80px]"/> 
                        </div>
                        <div className="w-[80px] h-[80px] bg-black">
                            <img src={FooterSix} className="h-[80px]"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* final div */}
            <div className="flex justify-between">
                <p className="ml-[130px]">Copyright <FontAwesomeIcon icon={faCopyright}/> 2021 All Rights Reserved. Site by Xiteb</p>
                <div className="icons flex gap-[20px] ml-[950px]">
                    <FontAwesomeIcon icon={faInstagram} className=" h-[25px]"/>
                    <FontAwesomeIcon icon={faFacebook} className=" h-[25px]"/>
                    <FontAwesomeIcon icon={faTwitter} className=" h-[25px]"/>
                    <FontAwesomeIcon icon={faLinkedin} className=" h-[25px]"/>
                    <FontAwesomeIcon icon={faGithub} className=" h-[25px]"/>
                </div>
                <a href="home"><FontAwesomeIcon icon={faArrowUpLong} className="h-[25px] mr-[50px] p-[10px] mt-[-15px] mb-[5px] bg-orange-400"/></a>
            </div>
            </div>
        </div>
    )
}

export default Footer;