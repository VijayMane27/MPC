import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        let timer;

        if (isHovered) {
            timer = setTimeout(() => {
                setIsAnimated(true);
            }, 500); // Delaying the animation start after 500ms
        } else {
            setIsAnimated(false);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [isHovered]);

    return (
        <div
            className="flex justify-center items-start h-screen bg-[#F7F7FC] overflow-x-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="text-center mt-16 relative max-w-screen-lg w-full px-4"
                initial={{ top: '-100%', left: '100%', opacity: 0 }}
                animate={isAnimated ? { top: '0%', left: '0%', opacity: 1 } : {}}
                transition={{
                    type: 'spring',
                    stiffness: 70,
                    damping: 25,
                    duration: 1 
                }}
            >
               
                <h1 className="text-4xl font-bold mb-4 relative p-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 inline-block relative">
                        About Us
                        <span
                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400"
                            style={{ width: '50%', height: '2px', }} 
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
                        <p className="mb-4">
                            Sports medical rehabilitation is a specialized field that focuses on the prevention, evaluation, treatment, and rehabilitation of injuries related to sports and physical activities. It plays a crucial role in helping athletes and active individuals recover from injuries, improve their performance, and return to their respective sports or activities safely and efficiently.
                        </p>

                        <p className="mb-4">
                            The primary goal of sports medical rehabilitation is to restore an individual's function, mobility, strength, and endurance following an injury or surgery. This involves a comprehensive approach that may include various therapeutic interventions, exercise programs, and manual techniques tailored to the specific needs and goals of the individual.
                        </p>

                        <p>
                            The rehabilitation process typically begins with a thorough evaluation by a sports medicine physician or physiotherapist to assess the extent of the injury and develop a personalized treatment plan.
                        </p>

                        {/* Buttons */}
                        <div className="mt-6">
                            <button
                                className="bg-gradient-to-r from-purple-500 to-cyan-400 text-white px-6 py-2 rounded-md mr-4 hover:opacity-80"
                            >
                                Learn More
                            </button>
                            <button
                                className="border border-purple-500 text-purple-500 px-6 py-2 rounded-md hover:border-green-500 hover:text-green-500"
                            >
                                How to Work
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutUs;
