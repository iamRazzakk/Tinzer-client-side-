import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import image1 from '../../../assets/Picture/hero-img-1.jpg'
import image2 from '../../../assets/Picture/hero-img-8.jpg'
import image3 from '../../../assets/Picture/hero-img-9.jpg'
import { FaHeadset } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="md:flex">
                        <div className="flex-1 md:space-y-6 lg:p-20 md:p-12 p-10">
                            <h3 className='text-xl font-bold'>We Take Care Of Your Health</h3>
                            <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>
                                We Are Providing Best and Affordable Health Care
                            </h1>
                            <p className='text-base'>Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old richer.</p>
                            <div className="flex gap-4">
                                <button className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#2490eb] rounded-xl hover:bg-white group">
                                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">Find Out More</span>
                                </button>
                                <Link to='specialities'>
                                    <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#2490eb] rounded-full group-hover:w-56 group-hover:h-56"></span>
                                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                        <span className="relative">Our Service</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img className='h-[80vh] rounded-2xl md:pt-10' src={image1} alt="" />
                            <div className="flex">

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:flex">
                        <div className="flex-1 md:space-y-6 lg:p-20 md:p-12 p-10">
                            <h3 className='text-xl font-bold'>24/7 Call Support</h3>
                            <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>
                                Join Us Forever To Get Help From Anywhere
                            </h1>
                            <p className='text-base'>Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old richer.</p>
                            <div className="flex gap-4">
                                <button className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#2490eb] rounded-xl hover:bg-white group">
                                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">Find Out More</span>
                                </button>
                                <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#2490eb] rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Our Service</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img className='h-[80vh] rounded-2xl md:pt-10' src={image2} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="md:flex">
                        <div className="flex-1 md:space-y-6 lg:p-20 md:p-12 p-10">
                            <h3 className='text-xl font-bold'>Telemedicine Help</h3>
                            <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>
                                Most Complete Health Solution In Your Hands
                            </h1>
                            <p className='text-base'>Ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old richer.</p>
                            <div className="flex gap-4">
                                <button className="relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-[#2490eb] rounded-xl hover:bg-white group">
                                    <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">Find Out More</span>
                                </button>
                                <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden  font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#2490eb] rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Our Service</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img className='relative h-[80vh] rounded-2xl md:pt-10' src={image3} alt="" />
                            <div className="flex items-center justify-evenly absolute text-white">
                                <div className=' md:-mt-24 rounded-lg bg-[#191919] w-52 h-36'>
                                    <div className=' lg:mb-6 w-28 h-28 '>
                                        <FaHeadset className='flex bg-[#2490eb] rounded-full text-white p-1 items-center text-3xl text-center lg:ml-20 justify-center'></FaHeadset>
                                    </div>
                                    <div className='text-center mt-6 relative text-white p-4'>
                                        <h1 className="text-xl font-bold">24/7 Support</h1>
                                        <p>There are many variations of passages are valid</p>
                                    </div>
                                </div>

                                {/* Qulified Doctor */}
                                <div className=' md:-mt-24 rounded-lg bg-[#191919] w-52 h-32'>
                                    <div className=' lg:mb-6 w-28 h-28 '>
                                        <FaHeadset className='flex bg-[#2490eb] rounded-full text-white p-1 items-center text-3xl text-center lg:ml-20 justify-center'></FaHeadset>
                                    </div>
                                    <div className='text-center mt-6 relative text-white p-4'>
                                        <h1 className="text-xl font-bold">24/7 Support</h1>
                                        <p>There are many variations of passages are valid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;