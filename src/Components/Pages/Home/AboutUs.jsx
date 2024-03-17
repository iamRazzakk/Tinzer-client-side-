import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { FaPlayCircle } from "react-icons/fa";
import { FaUserDoctor, FaUserAstronaut, FaHandsWash } from "react-icons/fa";
import { PiUsersThreeBold } from "react-icons/pi";
import { FcReading } from "react-icons/fc";
import { LuDna } from "react-icons/lu";
import '../../utility/About.css';

const AboutUs = () => {
    const [isOpen, setOpen] = useState(false);
    
    return (
        <div className="md:flex bg-black justify-center">
            <div className='flex-1'>
                <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="L61p2uyiMSo"
                    onClose={() => setOpen(false)}
                    className="modal-video"
                />
                <div className='relative h-full w-full rounded-lg object-cover'>
                    {/* Play button for the YouTube video */}
                    <FaPlayCircle className='absolute inset-0 m-auto text-7xl font-bold bg-white cursor-pointer' onClick={() => setOpen(true)}></FaPlayCircle>
                </div>
            </div>
            <div className='flex-1 space-y-4 text-white lg:py-10 lg:px-4'>
                <h1 className='text-[#207ef7]'>About Us</h1>
                <h1 className='text-4xl font-bold'>About Coronavirus Disease</h1>
                <p>stay home & safe for you and others, and maintain all the safety measures by medical professionals to defeat it!</p>
                <p>know the symptoms of the coronavirus(covid-19) and inform others, follow the safety steps instructed by world health organization (WHO).</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                {/* for about side grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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