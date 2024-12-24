import React from "react";
import About from "./About";

const Project = () => {
  return (
    <>
     
        {/* <img
        className="w-screen h-[1500px]  "
        src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg"
        /> */}
        <div className="  w-[70%] flex justify-between  text-black  mx-64 h-[70%] box-content  ">
          <h1 className="font-bold text-[30px] ml-12  pt-6">Project</h1>

          <div className="">
            {/* box-1 */}
            <div className="grid grid-cols-2  mr-40 pt-20   ">
              <div className=" grid grid-cols-1   ">
                {/* image section */}
                <img
                  className="w-full h-auto border-solid border-black border-4 rounded-lg"
                  src="https://i.ibb.co/GdbRG8z/Screenshot-562.png"
                />
              </div>
              <div className="grid col-span-1  ">
                <div className=" Poppins, sans-serif flex flex-col w-[500px] mx-6">
                  <h1 className="text-2xl mx-4">
                    Satipitick - a video streaming App
                  </h1>
                  <p className=" mx-4 pt-4 w-[475px]">
                    Developed a scalable and performant video streaming app
                    using React, Tailwind, React Router, and Redux
                  </p>

                  <div className="flex pt-1 mx-4 w-[600px]">
                    <span className="w-36 font-bold text-lg  pt-2">
                      Tech Stack-
                    </span>
                    <span className="font-semi-bold mr-24  w-[490px]  pt-3">
                      React, React-router, Redux-toolkit, TailwindCss
                    </span>
                  </div>
                  <div className="flex gap-4 mx-4 pt-4">
                    <button className="text-black mx-2 px-4 p-2 text-xl  border border-blue-600 rounded-lg hover:bg-blue-700  hover:text-white w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                      Github
                    </button>{" "}
                    <button className="text-white mx-2 px-4 p-2 text-xl bg-blue-600 border border-blue-600 rounded-lg hover:bg-white  hover:text-black w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                      Live
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* box-2 */}
            <div className="">
              <div className="grid grid-cols-2  mr-40 pt-8   ">
                <div className=" grid grid-cols-1  ">
                  {/* image section */}
                  <img
                    className="w-full h-auto border-solid border-black border-4 rounded-lg"
                    src="https://i.ibb.co/GdbRG8z/Screenshot-562.png"
                  />
                </div>
                <div className="grid col-span-1  ">
                  <div className=" Poppins, sans-serif flex flex-col w-[500px]  mx-6">
                    <h1 className="text-2xl mx-4">DELIVERIA</h1>
                    <p className=" mx-4 pt-2 w-[375px]">A Food delivery app</p>

                    <div className="flex pt-0 mx-4 w-[600px]">
                      <span className="w-36 font-bold text-lg  pt-2">
                        Tech Stack-
                      </span>
                      <span className="font-semi-bold mr-24  w-[490px]  pt-0">
                        React, React-router, Redux-toolkit, Jest, Tailwindcss,
                        React-testing-library
                      </span>
                    </div>
                    <div className="flex gap-4 mx-4 pt-4">
                      <button className="text-black mx-2 px-4 p-2 text-xl  border border-blue-600 rounded-lg hover:bg-blue-700  hover:text-white w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                        Github
                      </button>
                      <button className="text-white mx-2 px-4 p-2 text-xl bg-blue-600 border border-blue-600 rounded-lg hover:bg-white  hover:text-black w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                        Live
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* box-3*/}
              <div className="  ">
                <div className="grid grid-cols-2  mr-40 pt-11   ">
                  <div className=" grid grid-cols-1   ">
                    {/* image section */}
                    <img
                      className="w-full h-auto border-solid border-black border-4 rounded-lg"
                      src="https://i.ibb.co/GdbRG8z/Screenshot-562.png"
                    />
                  </div>
                  <div className="grid col-span-1  ">
                    <div className=" Poppins, sans-serif flex flex-col w-[500px]  mx-4">
                      <h1 className="text-2xl mx-4">Netflix-GPT</h1>
                      <p className=" mx-4 pt-4 w-[375px]">
                        Implemented netflix core functionality with a proper
                        user auth system backed by firebase, Integrated
                        Gemini-API to fetch movies via given prompt, a features
                        loaded and heavy on UI project.
                      </p>

                      <div className="flex pt-1 mx-4 w-[600px]">
                        <span className="w-36 font-bold text-lg  pt-2">
                          Tech Stack-
                        </span>
                        <span className="font-semi-bold mr-24  w-[490px]  pt-3">
                          React, React-router, Redux-toolkit, TailwindCss
                        </span>
                      </div>
                      <div className="flex gap-4 mx-4 pt-4">
                        <button className="text-black mx-2 px-4 p-2 text-xl  border border-blue-600 rounded-lg hover:bg-blue-700  hover:text-white w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                          Github
                        </button>{" "}
                        <button className="text-white mx-2 px-4 p-2 text-xl bg-blue-600 border border-blue-600 rounded-lg hover:bg-white  hover:text-black w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                          Live
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* box-3 */}
            <div className="  ">
              <div className="grid grid-cols-2  mr-40 pt-11   ">
                <div className=" grid grid-cols-1   ">
                  {/* image section */}
                  <img
                    className="w-full h-auto border-solid border-black border-4 rounded-lg"
                    src="https://i.ibb.co/GdbRG8z/Screenshot-562.png"
                  />
                </div>
                <div className="grid col-span-1  ">
                  <div className=" Poppins, sans-serif flex flex-col w-[500px]  mx-4">
                    <h1 className="text-2xl mx-4">Quiz APP</h1>
                    <p className=" mx-4 pt-4 w-[375px]">
                      Created simple Quiz app Using HTML CSS and JavaScript
                    </p>

                    <div className="flex pt-1 mx-4 w-[600px]">
                      <span className="w-36 font-bold text-lg  pt-2">
                        Tech Stack-
                      </span>
                      <span className="font-semi-bold mr-24  w-[490px]  pt-3">
                        html, Css ,JavaScript
                      </span>
                    </div>
                    <div className="flex gap-4 mx-4 pt-4">
                      <button className="text-black mx-2 px-4 p-2 text-xl  border border-blue-600 rounded-lg hover:bg-blue-700  hover:text-white w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                        Github
                      </button>{" "}
                      <button className="text-white mx-2 px-4 p-2 text-xl bg-blue-600 border border-blue-600 rounded-lg hover:bg-white  hover:text-black w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                        Live
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* box-4 */}

            <div className="  ">
              <div className="grid grid-cols-2  mr-40 pt-11   ">
                <div className=" grid grid-cols-1  ">
                  {/* image section */}
                  <img
                    className="w-full h-auto border-solid border-black border-4 rounded-lg"
                    src="https://i.ibb.co/GdbRG8z/Screenshot-562.png"
                  />
                </div>
                <div className="grid col-span-1  ">
                  <div className=" Poppins, sans-serif flex flex-col w-[500px]  mx-4">
                    <h1 className="text-2xl mx-4">LinkedIn Clone</h1>
                    <p className=" mx-4 pt-4 w-[375px]">
                      Created simple LinkedIn Clone website using html and CSS.
                    </p>

                    <div className="flex pt-1 mx-4 w-[600px]">
                      <span className="w-36 font-bold text-lg  pt-2">
                        Tech Stack-
                      </span>
                      <span className="font-semi-bold mr-24  w-[490px]  pt-3">
                        html, Css
                      </span>
                    </div>
                    <div className="flex gap-4 mx-4 pt-4">
                      <button className="text-black mx-2 px-4 p-2 text-xl  border border-blue-600 rounded-lg hover:bg-blue-700  hover:text-white w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                        Github
                      </button>{" "}
                      <button className="text-white mx-2 px-4 p-2 text-xl bg-blue-600 border border-blue-600 rounded-lg hover:bg-white  hover:text-black w-[40]  transition duration-250 ease-in-out cursor-pointer ">
                        Live
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
        </div>
        {/* about us component */}
      </div>
    </>
  );
};

export default Project;
