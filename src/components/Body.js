import React from "react";
import Header from "./Header";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Project from "./Project";
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import MainContainer from "./MainContainer";


const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path:"/project",
      element:<Project/>
    },
   
  ]);

  return (
       <div>
    <div>
       {/* <RouterProvider router={appRouter}/> */}
    </div>
      
      <div className=" relative overflow-hidden w-full h-[100vh]">
      <div className=" absolute top-0 left-0 w-full h-full ">
        <img
          className=" w-full h-full object-cover"
          src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/blob-haikei.svg"
          alt="background"
        />
      </div>
      </div>

      <div className="absolute top-64 flex   ">
        <ul className="text-white flex flex-col gap-10 ml-8 fixed">
          <li>
            <FaLinkedin className="text-3xl text-gray-500 hover:bg-blue-600 hover:rounded-md  transition ease-in-out delay-50 hover:cursor-pointer hover:text-black hover:scale-110" />
          </li>
          <li>
            <SiGithub className="text-3xl text-gray-500 hover:bg-white  hover:rounded-md  transition ease-in-out delay-50 hover:cursor-pointer hover:text-black hover:scale-110" />
          </li>
          <li>
            <FaXTwitter className="text-3xl text-gray-500 hover:bg-white hover:rounded-md  transition ease-in-out delay-50 hover:cursor-pointer hover:text-black hover:scale-110" />
          </li>
        </ul>
      </div>

      <Header />  
      <MainContainer/>
      
    </div>
  );
};

export default Body;
