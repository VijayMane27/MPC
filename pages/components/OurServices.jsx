import React from "react";

const OurServices = () => {
  // Importing the images
  const mainServiceImages = [
    require("../../public/images/service1.jpg").default,
    require("../../public/images/service1.jpg").default,
    require("../../public/images/service1.jpg").default,
  ];

  const leftSideImages = [
    require("../../public/images/service1small2.jpg").default,
  ];

  const rightSideImages = [
    require("../../public/images/service1small.jpg").default,
  ];

  const services = [
    "Red Light Therapy",
    "Hyperbaric Oxygen Therapy",
    "Normatec Compression",
    "Whole Body Cryotherapy",
    "EMS Training",
    "IV Therapy",
    "Foot Balance",
    "Far-Infrared Light Sauna",
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

      {/* Main Vertical Oval Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-36 mt-8 w-full max-w-6xl justify-items-center mx-auto relative">
        {/* Map through the main images array to render each main card */}
        {mainServiceImages.map((image, index) => (
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
              position: "relative",
            }}
            className="bg-white p-6 shadow-lg relative text-center font-inter"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10">
              <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                <ul className="flex flex-wrap list-disc list-inside text-sm">
                  {services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="font-inter text-white mt-1 mx-2"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-4 bg-white bg-opacity-10 text-white rounded-md p-2.5 pl-10 pr-10"
                style={{ fontFamily: "'inter var', sans-serif" }}
              >
                HYDROTHEREPY
              </button>
            </div>

            {/* Left Side Image */}
            <div
              className="absolute bottom-0 left-0"
              style={{ top: "350px" }} // Adjusted top value
            >
              {leftSideImages.map((leftImage, leftIndex) => (
                <div
                  key={leftIndex}
                  style={{
                    borderRadius: "35px",
                    backgroundImage: `url(${leftImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    height: "180px",
                    width: "180px",
                    position: "relative",
                    bottom: "45px",
                    left: "auto",
                    right: "113px",
                  }}
                ></div>
              ))}
            </div>

            {/* Right Side Image */}
            <div
              className="absolute bottom-0 right-0"
              style={{ top: "350px" }} // Adjusted top value
            >
              {rightSideImages.map((rightImage, rightIndex) => (
                <div
                  key={rightIndex}
                  style={{
                    borderRadius: "35px",
                    backgroundImage: `url(${rightImage.src})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    height: "180px",
                    width: "180px",
                    position: "relative",
                    left: "113px",
                    bottom: "45px",
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
