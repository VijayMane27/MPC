import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const HomeVideoSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const videoplayoutlineVariants = {
        initial: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 1, delay: 1 } },
    };

    const fillvideoplayVariants = {
        initial: { opacity: 0, x: '100%' },
        animate: {
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : '100%',
            transition: { duration: 1 },
        },
    };

    const contentVariants = {
        initial: { opacity: 0, x: '-100%' },
        animate: {
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : '-100%',
            transition: { duration: 1 },
        },
    };

    return (
        <div className="relative h-screen overflow-hidden flex">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden flex-1">
                <Image
                    src="/images/massage.jpg"
                    alt="background image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>


            <div className="flex flex-1 relative">

                <div className="absolute inset-y-0 left-10 w-full overflow-x-auto max-w-[calc(100%-800px)] flex justify-center items-center">
                <motion.div
  className="flex flex-col items-start justify-center h-full text-left"
  variants={contentVariants}
  initial="initial"
  animate="animate"
>
  <h1 className="text-4xl font-bold text-white mb-4">A vision for your Well Being</h1>
  <p className="text-xl text-white mb-6">Clinical excellence, pain Management and sports <br/> medicine rehabilitation</p>
  <button
     className="bg-transparent hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4 
     border border-x-blue-400  border-y-blue-400">
    Consult Now
  </button>
  <p className="text-white">Learn more about MPC</p>
</motion.div>
                </div>

                {/* Animated Icons */}
                <AnimatePresence>
                    <>
                        {/* Centered Icon */}
                        {isHovered && (
                            <motion.div
                                key="videoplayoutline"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                variants={videoplayoutlineVariants}
                                initial="initial"
                                animate="exit"
                                exit="exit"
                            >
                                <Image
                                    src="/images/videoplayoutline.png"
                                    alt="centered icon"
                                    width={100}
                                    height={100}
                                />
                            </motion.div>
                        )}

                        {/* Centered Icon for hover state */}
                        <motion.div
                            key="fillvideoplay"
                            className="absolute inset-0 flex items-center justify-center"
                            variants={fillvideoplayVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Image
                                src="/images/fillvideoplay.png"
                                alt="centered icon"
                                width={100}
                                height={100}
                            />
                        </motion.div>
                    </>
                </AnimatePresence>
            </div>

            {/* Invisible hover area */}
            <div
                className="absolute inset-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            ></div>
        </div>
    );
};

export default HomeVideoSection;
