import React from "react";
import Banner from "./Banner";
import OurProduct from "./OurProduct";
import WhatWeDo from "./WhatWeDo";
import AboutProducts from "./AboutProducts";

const home = () => {
  return (
    <div>
      {/* <Banner></Banner>     */}
      <OurProduct></OurProduct>
      <WhatWeDo></WhatWeDo>
      <AboutProducts></AboutProducts>
    </div>
  );
};

export default home;
