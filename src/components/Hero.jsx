import React from 'react';
import profilePic from "../assets/SwaMehprofilepic.png"; // Adjust path as per your project structure
import { HERO_CONTENT } from "../constants";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const blobStyle = {
    position: 'relative',
    backgroundImage: `url(${profilePic})`,
    width: '480px',
    height: '480px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    margin: '20px',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(255, 255, 255, 0.3), 0 5px 15px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.2)',
    animation: 'animate 5s ease-in-out infinite, fadeIn 1s ease-in-out 1.2s forwards',
    opacity: 0, // Initial state for fade-in effect
    transition: 'opacity 1s ease-in-out'
};

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-5xl font-thin -tracking-tight lg:mt-16 lg:text-7xl"
                        >
                            Swati Meher
                        </motion.h1>
                        <motion.div
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                        >
                            <TypeAnimation
                                sequence={[
                                    "I'm a Software Engineer",
                                    1000,
                                    "I'm a Passionate Developer",
                                    1000,
                                    "I'm a Freelancer",
                                    1000,
                                    "I'm a Machine Learning Engineer",
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{
                                    background: 'linear-gradient(to right, pink, slateblue, purple)',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    fontSize: '2rem',
                                    fontWeight: 'bold',
                                    display: 'inline-block'
                                }}
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-3 font-light -tracking-tight"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <div className="blob" style={blobStyle}></div>
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes animate {
                    0%, 100% {
                        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    }
                    50% {
                        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                    }
                }

                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }

                .blob {
                    width: 380px;
                    height: 380px;
                    background-size: cover;
                    background-position: center center;
                    margin: 20px;
                    border-radius: 50%;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(255, 255, 255, 0.4), 0 5px 15px rgba(0, 0, 0, 0.3), 0 2px 5px rgba(0, 0, 0, 0.2);
                    animation: animate 5s ease-in-out infinite, fadeIn 1s ease-in-out 1.2s forwards;
                    opacity: 0; // Initial state for fade-in effect
                    transition: opacity 1s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Hero;
