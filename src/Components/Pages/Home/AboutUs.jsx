import image from '../../../assets/Picture/about-4.jpg'
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaHandsWash } from "react-icons/fa";
import { PiUsersThreeBold } from "react-icons/pi";
import { FcReading } from "react-icons/fc";

import { FaPlayCircle } from "react-icons/fa";
import { LuDna } from "react-icons/lu";
import '../../utility/About.css'
import { useEffect, useRef, useState } from 'react';
const AboutUs = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoRef = useRef(null);

    const openVideo = () => {
        setIsVideoOpen(true);
    };

    const closeVideo = () => {
        setIsVideoOpen(false);
    };

    // Close the video when clicking outside of it
    const handleClickOutside = (event) => {
        if (videoRef.current && !videoRef.current.contains(event.target)) {
            closeVideo();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="md:flex bg-black  justify-center lg:mt-32 lg:p-5">
            <div className='flex-1 '>

                <div className='p-6 lg:mt-4'>
                    <img className='relative h-full w-full object-cover rounded' src={image} alt="" />
                </div>
                <FaPlayCircle onClick={openVideo} className='FaPlayCircle border border-white absolute lg:ml-64 rounded-full  lg:-mt-80 text-7xl font-bold bg-white'></FaPlayCircle>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {isVideoOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
                            <div className="modal-container  w-1/2 rounded-lg p-8" ref={videoRef}>
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/rFYQCBZcTU8?start=4293"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex-1 space-y-4 text-white lg:py-10 lg:px-4'>
                <h1 className='text-[#207ef7]'>About Us</h1>
                <h1 className='text-4xl font-bold'>About Coronavirus Disease</h1>
                <p>stay home & safe for you and others, and maintain all the safety measures by medical professionals to defeat it!</p>
                <p>know the symptoms of the coronavirus(covid-19) and inform others, follow the safety steps instructed by world health organization (WHO).</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                {/* for about side grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className='flex items-center justify-center rounded-lg gap-4 bg-[#07092B] py-6 px-4 gridHover'>
                        <FaUserDoctor className='text-2xl text'></FaUserDoctor>
                        <h3 className='text-xl text'> Person to Person</h3>
                    </div>
                    <div className='flex items-center justify-center rounded-lg gap-4 bg-[#07092B] py-6 px-4 gridHover'>
                        <LuDna className='text-2xl text'></LuDna>
                        <h3 className='text-xl text'> Infected Person Coughs</h3>
                    </div>
                    <div className='flex items-center justify-center rounded-lg gap-4 bg-[#07092B] py-6 px-4 gridHover'>
                        <FaUserAstronaut className='text-2xl text'></FaUserAstronaut>
                        <h3 className='text-xl text'>Close Contact Another</h3>
                    </div>
                    <div className='flex items-center justify-center rounded-lg gap-4 bg-[#07092B] py-6 px-4 gridHover'>
                        <FaHandsWash className='text-2xl text'></FaHandsWash>
                        <h3 className='text-xl'>Wash Your Hands</h3>
                    </div>
                    <div className='flex items-center justify-center rounded-lg gap-4 bg-[#07092B] py-6 px-4 gridHover'>
                        <PiUsersThreeBold className='text-2xl text'></PiUsersThreeBold>
                        <h3 className='text-xl '>Avoid Close Contact</h3>
                    </div>
                    <div className='flex items-center justify-center rounded-lg gap-4 bg-[#07092B] py-6 px-4 gridHover'>
                        <FcReading className='text-2xl text'></FcReading>
                        <h3 className='text-xl text'> Stay at Home</h3>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;