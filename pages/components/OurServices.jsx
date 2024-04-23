import React from "react";

const OurServices = () => {
    // Importing the images directly
    const service1Image = require("../../public/images/service1.jpg");
    const service2Image = require("../../public/images/service1.jpg");
    const service3Image = require("../../public/images/service1.jpg");

    const images = [service1Image.default, service2Image.default, service3Image.default];
    const services = [
        "Red Light Therapy",
        "Hyperbaric Oxygen Therapy",
        "Normatec Compression",
        "Whole Body Cryotherapy",
        "EMS Training",
        "IV Therapy",
        "Foot Balance",
        "Far-Infrared Light Sauna"
    ];

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#F7F7FC] overflow-hidden">
            <h1 className="text-4xl font-bold mb-4 relative p-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 inline-block relative">
                    Our Services
                    <span
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400"
                        style={{ width: "50%", height: "2px" }}
                    ></span>
                </span>
            </h1>

            {/* Vertical Oval Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-36 mt-8 w-full max-w-6xl justify-items-center mx-auto">
                {/* Map through the images array to render each card */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        style={{
                            borderRadius: "90px",
                            backgroundImage: `url(${image.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            height: "400px",
                            width: "350px",
                        }}
                        className="bg-white p-6 shadow-lg relative text-center font-inter"
                    >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <ul className="list-disc list-inside text-sm whitespace-nowrap">
                                {services.map((service, serviceIndex) => (
                                    <li key={serviceIndex} className="font-inter">{service}</li>
                                ))}
                            </ul>
                            <button 
                                className="mt-4 bg-transparent hover:text-[#5BD6DD] text-[#036DED] border border-[#036DED] rounded p-2"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
