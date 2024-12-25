
import Image from "next/image";
import React from "react";
import { BsStar } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import xmas from '../images/xmaspinju.png'
import nene from '../images/no-bg.png'



const Home=()=>{
  return (
    <div className=" w-full">
    

      <div className="relative">
        <Image src={xmas} alt="image" width={0} height={0} className="w-full"/>
      </div>


      {/* tablet */}
      <div className="absolute top-0 right-[1rem] bg-red-700 hidden heartbeat md:block rounded-full">
        <Image src={nene} width={200} height={200} alt="picture" className="rounded-full"/>
      </div>

      {/* MOBILE */}
      <div className="absolute top-0 right-[1rem] bg-red-700  md:hidden heartbeat rounded-full">
        <Image src={nene} width={80} height={80} alt="picture" className="rounded-full"/>
      </div>

     

      
      

      
    </div>
  )


};

export default Home;