import React from 'react';

const OurServices = () => {

    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#F7F7FC] overflow-hidden">
            <h1 className="text-4xl font-bold mb-4 relative p-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400 inline-block relative">
                    Our Services
                    <span
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-400"
                        style={{ width: '50%', height: '2px' }}
                    ></span>
                </span>
            </h1>

            {/* Vertical Oval Card */}
            <div className="card bg-white rounded-full shadow-md p-6 max-w-xs h-[400px] relative" 
                 style={{ 
                    borderTopLeftRadius: '20% 20%',
                    borderTopRightRadius: '20% 20%',
                    borderBottomLeftRadius: '20% 20%',
                    borderBottomRightRadius: '20% 20%',
                    backgroundImage: `url('/images/hydrotherapy.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
            >
            </div>
        </div>
    );
}

export default OurServices;
