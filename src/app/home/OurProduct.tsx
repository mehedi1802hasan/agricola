import React from "react";
import softWheat from "../../assest/softWheat.jpg";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";
import riceicon from "../../assest/riceicon.png";
import gardenTillage from "../../assest/gardenTillage.jpg";
import Vegatables from "../../assest/Vegatables.jpg";
import FarmLivestock from "../../assest/FarmLivestock.jpg";

const OurProduct = () => {
  return (
    <div className="py-14 bg-[#FAF7F0]">
      <div className="flex flex-col justify-center items-center ">
        <Image src={riceicon} className="w-14 h-14" alt="rice icon "></Image>
        <p className="font-bold text-[#0A1108] text-[12px] mt-4">
          OUR AGRICULTURAL COMPANY
        </p>
        <p className=" w-[316px] mx-auto   lg:w-[860px] text-center mt-2 text-[22px] lg:text-[40px] font-bold  lg:leading-[46px]">
          <span className=" flex justify-center  ">We’re a World-Leading</span>{" "}
          Provider of Organic Products
        </p>
      </div>
      <div className="my-6  flex flex-col lg:flex-row lg:flex justify-center items-center gap-4 lg:gap-6">
               {/* 1st div */}

        <div>
          <Image
            src={softWheat}
            alt="soft-wheat image"
            className="w-60 h-64 hover:-translate-y-3 duration-700"
          ></Image>
          <div className="my-4">
            <p className="font-bold text-[18px]">Soft Wheat</p>
            <div className="mt-1">
              <h3 className="flex items-center gap-2  text-[13px]">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Lorem Ipsum
              </h3>
              <h3 className="flex items-center gap-2  text-[13px] my-1">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Etiam Molesti
              </h3>
              <h3 className="flex items-center gap-2  text-[13px]">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Nam Semper
              </h3>
            </div>
          </div>
        </div>
       {/* 2nd div */}
        <div className="lg:mt-20">
          <Image
            src={gardenTillage}
            alt="soft-wheat image"
            className="w-60 h-64 hover:-translate-y-3 duration-700"
          ></Image>
          <div className="my-4">
            <p className="font-bold text-[18px]">Garden Tillage
</p>
            <div className="mt-1">
              <h3 className="flex items-center gap-2  text-[13px]">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Lorem Ipsum
              </h3>
              <h3 className="flex items-center gap-2  text-[13px] my-1">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Etiam Molesti
              </h3>
              <h3 className="flex items-center gap-2  text-[13px]">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Nam Semper
              </h3>
            </div>
          </div>
      
        </div>

               {/* 3rddiv */}
               <div>
          <Image
            src={Vegatables}
            alt="soft-wheat image"
            className="w-60 h-64 hover:-translate-y-3 duration-700"
          ></Image>
          <div className="my-4">
            <p className="font-bold text-[18px]">Vegatables
</p>
            <div className="mt-1">
              <h3 className="flex items-center gap-2  text-[13px]">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Lorem Ipsum
              </h3>
              <h3 className="flex items-center gap-2  text-[13px] my-1">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Etiam Molesti
              </h3>
              <h3 className="flex items-center gap-2  text-[13px]">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Nam Semper
              </h3>
            </div>
          </div>
        </div>

       {/* 4th div */}
       <div className="lg:mt-20">
          <Image
            src={FarmLivestock}
            alt="soft-wheat image"
            className="w-60 h-64 hover:-translate-y-3 duration-700"
          ></Image>
          <div className="my-4">
            <p className="font-bold text-[18px]">Farm Livestock
</p>
            <div className="mt-1">
              <h3 className="flex items-center gap-2  text-[13px]">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Lorem Ipsum
              </h3>
              <h3 className="flex items-center gap-2  text-[13px] my-1">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Etiam Molesti
              </h3>
              <h3 className="flex items-center gap-2  text-[13px]">
                <span>
                  <BsCircleFill className="text-[5px] mt-[5px] text-[#F2C200]" />
                </span>
                Nam Semper
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
