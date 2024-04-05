import React from 'react';

const bannerVideo = '/videos/vdo.mp4';

const Banner = () => {
    return (
        <div className="relative h-screen flex items-center justify-center ">
            <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-0">
                <source src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute z-10 text-white text-center">
                <h1 className="text-4xl font-bold text-black">Hello, world!</h1>
                {/* Add additional content as needed */}
            </div>
        </div>
    );
};

export default Banner;
