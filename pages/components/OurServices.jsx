import React from "react";
import backgroundImage from "../../public/images/service1.jpg";

const OurServices = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div
          style={{
            borderRadius: "90px",
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "400px",
          }}
          className="bg-white  p-6 shadow-lg"
        ></div>

        {/* Card 2 */}
        <div
          style={{
            borderRadius: "90px",
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "400px",
          }}
          className="bg-white  p-6 shadow-lg"
        ></div>

        {/* Card 3 */}
        <div
          style={{
            borderRadius: "90px",
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "400px",
          }}
          className="bg-white  p-6 shadow-lg"
        ></div>
      </div>
    </div>
  );
};

export default OurServices;
