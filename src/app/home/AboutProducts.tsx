import React from 'react';
import Image from "next/image";
import riceicon from "../../assest/riceicon.png";
import ghumTree from '../../assest/ghumTree.jpg';
import imageTree from '../../assest/imageTree.png';
const AboutProducts = () => {
    return (
        <div className='w-[1150px] lg:mx-auto my-12'>
              <div className="flex flex-col justify-center items-center ">
        <Image src={riceicon} className="w-14 h-14" alt="rice icon "></Image>
        <p className="font-bold text-[#0A1108] text-[12px] mt-4">
        CHOOSE ORGANIC PRODUCTS
        </p>
        <p className=" w-[316px] mx-auto   lg:w-[850px] text-center mt-2 text-[22px] lg:text-[40px] font-bold  lg:leading-[46px]">
          <span className=" flex justify-center  ">Our Crop is Grown with Great</span>{" "}
          Care and Love for Nature        </p>
      </div>
      <div className=' my-16 flex justify-between  '>
        <div className='flex items-center gap-4'>
            <Image src={imageTree} className='h-[460px] w-[380px]' alt=' image tree here'></Image>
            <Image src={ghumTree} className='h-[460px] w-[380px]' alt=' ghumTree tree here'></Image>
        </div>
        <div>
         <div>
            <p className='text-[22px] font-bold'>100% Organic
</p>
<h1 className='w-80 mt-4'>Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque.</h1>
         </div>

         <div className='my-12'>
            <p className='text-[22px] font-bold'>High Quality

</p>
<h1 className='w-80 mt-4'>Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque.</h1>
         </div>

         <div>
            <p className='text-[22px] font-bold'>Always Fresh


</p>
<h1 className='w-80 mt-4'>Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam doloremque.</h1>
         </div>
        </div>
      </div>
        </div>
    );
};

export default AboutProducts;