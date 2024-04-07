import React from "react";
import whatwedo from "../../assest/whatwedo.jpeg";
import Image from "next/image";
const WhatWeDo = () => {
  return (
    <div className="py-16 w-[1050px] lg:mx-auto">
      <p className="font-bold text-[14px]">WHAT WE DO</p>
      <p className=" font-bold text-[45px] w-[700px] lg:leading-[53px] mt-2">
        Currently We Are Growing and Selling Organic Food
      </p>
     <div className="relative mb-12 ">
     <div className="flex justify-between gap-12 mt-10 ">
        <Image className="w-[670px] h-[500px]" src={whatwedo} alt="what we do image"></Image>
        <div className="text-[17px]"> <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        <p className="my-8">Wiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        <button className="text-black hover:text-yellow-500  font-bold  border-b-2 border-black">Read More</button>
        </div>
      </div>
      <div className="flex items-center justify-center absolute  -bottom-16 right-0 gap-6">
        <div className="text-white font-bold bg-[#92BB53] p-8 w-[250px] ">
            <p className="text-lg">People
</p>
<p className="text-5xl my-[11px]">100+</p>
<p className="text-base font-normal">Adipiscing elit, do eiusm.</p>
        </div>


        <div className="text-white font-bold bg-black p-8 w-[250px] ">
            <p className="text-lg">World Offices</p>
<p className="text-5xl my-[11px]">16</p>
<p className="text-base font-normal w-36">Sed do eiusmod tempor</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default WhatWeDo;
