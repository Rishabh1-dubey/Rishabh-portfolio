import { useRef } from "react";
import { Link } from "react-router-dom";


const Header = () => {

  return (
    <div className="absolute top-3 h-20  flex  items-center justify-between w-9/12  mx-56">
     <img className=" w-28" src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-580x435.png" alt="logo"></img>
      <ul className="flex items-center  ">
        <li className="text-white text-xl m-2 p-2 hover:text-cyan-400 hover:cursor-pointer transition duration-250 ease-in-out ">
         Home
          
        </li>
        <li className="text-white  text-xl m-2 p-2 hover:text-cyan-400 hover:cursor-pointer transition duration-250 ease-in-out ">
      About
        </li>    
            <li className="text-white  text-xl m-2 p-2 hover:text-cyan-400 hover:cursor-pointer transition duration-250 ease-in-out ">
         
        </li>
        <li className="text-white text-xl m-2 p-2 hover:text-cyan-400 hover:cursor-pointer transition duration-250 ease-in-out">
          Contact Us
        </li>
      </ul>
      <button className="text-white mx-2 px-4 p-2 text-xl  border rounded-lg hover:bg-orange-200  w-[40] hover:text-black transition duration-250 ease-in-out cursor-pointer hover:scale-90 ">
        Resume
      </button>

      {/* https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/footer_wave.svg */}
    </div>
  );
};
export default Header;
