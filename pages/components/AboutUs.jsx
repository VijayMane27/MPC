import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    let timer;

    if (isHovered) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isHovered]);

  return (
    <div
      className="flex justify-center items-start h-screen bg-[#F7F7FC] overflow-x-hidden overflow-y-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="text-center mt-16 relative max-w-screen-lg w-full px-4"
        initial={{ top: "-100%", left: "100%", opacity: 0 }}
        animate={isAnimated ? { top: "0%", left: "0%", opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 25,
          duration: 1,
        }}
      >
        <h1 className="text-4xl font-bold mb-4 relative p-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 inline-block relative">
            About Us
            <span
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400"
              style={{ width: "50%", height: "2px" }}
            ></span>
          </span>
        </h1>

        {/* Content */}
        <div className="flex justify-between items-start mt-10">
          {/* Image */}
          <div className="flex-shrink-0 w-1/2 mr-4 mb-4">
            <img
              src="/images/Aboutimage.png"
              alt="About Us"
              className="w-128 h-128 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="flex-grow w-1/2 text-left max-w-[50%]">
            <p>
              Welcome to My Pain Clinic, a premier establishment under the
              esteemed banner of M/s. Global Body Fix, setting the gold standard
              for pain management and rehabilitation across the Asia-Pacific
              region.
            </p>
            <p>
              Nestled in the vibrant heart of Mumbai's Bandra-West, our clinic
              is more than
            </p>
            <p>
              just a healthcare facility; it's a sanctuary of advanced solutions
              and compassionate care.We seamlessly blend cutting-edge technology
              in
            </p>
            <p>
              Physiotherapy and Sports Rehabilitation with a commitment to your
              well-being.
            </p>
            <p>
              My Pain Clinic stands at the forefront of clinical excellence,
              offering innovative pain management and rehabilitation solutions.
            </p>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            {/* Buttons */}
            <div className="mt-6">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-6 py-2 rounded-md mr-4 hover:opacity-80">
                Learn More
              </button>
              <button className="border border-purple-500 text-purple-500 px-6 py-2 rounded-md hover:border-green-500 hover:text-green-500">
                How to Work
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
