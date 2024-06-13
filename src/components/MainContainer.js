import React, { useRef } from "react";
import Project from "./Project";
import About from "./About";
import ContactUs from "./ContactUs";
// import items from "../Items/Rishabh-porfolio.png";


const MainContainer = () => {
 
  return (
<>
    
    <div className="absolute top-36 flex justify-between  text-red-400  w-[70%]  mx-52   box-content">
        <div className=" h-[300px] w-[800px] pr-10 m-20 animate-slideFromLeft p-6 rounded shadow-md ">
          <h1 className="text-white text-[45px]  w-[220] ">
            Hi, Rishabh Dubey
          </h1>
          <h5 className=" text-2xl pt-2 text-gray-500">Frontend Developer</h5>
          <p className=" text-lg pt-4 text-slate-100  ">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>

        <div className=" h-[300px] w-[500px]    m-20 ">
          <img
            className=" h-auto  relative top-2 "
            src="https://cdn-icons-png.flaticon.com/512/1995/1995515.png" alt="logo"
            ></img>
        </div>

        {/* ----------------scroll down--------------- */}
        <div className=" text-white absolute top-80   p-4   mx-20  w-[87%]">
          <div className="flex m-1 gap-2 p-2 h-14 animate-custom-spin text-2xl box-border cursor-pointer">
            <span className="">scroll down</span>
            <img
              className=""
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg" alt="logo"
              />
          </div>
        </div>
       
      </div>
    
     
     
      
      </>
  );
};

export default MainContainer;
