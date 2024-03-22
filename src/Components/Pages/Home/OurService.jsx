import ServiceImage from '../../../assets/Picture/woman.jpg'
import '../../utility/About.css'
import { BiLogoZoom } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaTruckMedical } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const OurService = () => {
    return (
        <div className="bg-[#07092B] text-white">
            <div className="text-center lg:pt-32 space-y-4">
                <h6 className="">Our Services</h6>
                <h1 className="text-5xl font-bold">Our Healthcare Services</h1>
                <p>Our comprehensive healthcare services encompass a wide range of specialties and treatments.</p>
            </div>
            <div className="md:flex lg:mt-10 gap-4">
                <div className="flex-1 md:p-4">
                    <img className='rounded-lg' src={ServiceImage} alt="" />
                </div>
                <div className="flex-1 md:p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        <div className='p-4 space-y-4 gridHover border border-black rounded-xl'>
                            <div className=' flex items-center justify-center'>
                                <BiLogoZoom className='bg-white p-2 text-primary w-16 h-16 rounded-full'></BiLogoZoom>
                            </div>
                            <h1 className='text-2xl font-bold text-center'>Live Video Consultation</h1>
                            <p className='text-center'>Instant video consultation now or schedule a future appointment.</p>
                            <div className='flex items-center justify-center'>
                                <Link to='specialities'>
                                    <button className='  text-secondary text-base'>Read More +</button>
                                </Link>
                            </div>
                        </div>
                        <div className='p-4 space-y-4 gridHover border border-black rounded-xl'>
                            <div className=' flex items-center justify-center'>
                                <MdHealthAndSafety className='bg-white p-2 text-primary w-16 h-16 rounded-full'></MdHealthAndSafety>
                            </div>
                            <h1 className='text-2xl font-bold text-center'>Health Care Packages</h1>
                            <p className='text-center'>Consultations, hospital care, insurance and more</p>
                            <div className='flex items-center justify-center'>
                                <Link to='subscription-plans'>
                                    <button className='  text-secondary text-base'>Read More +</button>
                                </Link>
                            </div>
                        </div>
                        <div className='p-4 space-y-4 gridHover border border-black rounded-xl'>
                            <div className='flex items-center justify-center'>
                                <FaTruckMedical className='bg-white p-2 text-primary w-16 h-16 rounded-full'></FaTruckMedical>
                            </div>
                            <h1 className='text-2xl font-bold text-center'>Orthopedics</h1>
                            <p className='text-center'>Orthopedics focuses on musculoskeletal health, providing care for bones, joints, and muscles to enhance mobility and function.</p>
                            <div className='flex items-center justify-center'>
                                <button className=' gridHover text-secondary text-base'>Read More +</button>
                            </div>
                        </div>
                        <div className='p-4 space-y-4 gridHover border border-black rounded-xl'>
                            <div className='flex items-center justify-center'>
                                <img className='w-16  h-16 rounded-full object-cover' src="https://icon2.cleanpng.com/20180802/fr/kisspng-my-pregnancy-journal-abstract-background-6-x-9-%D0%92%D1%8B%D0%BF%D1%83%D1%81%D0%BA-%E2%84%96-1-new-generation-5b639f2ab32e20.4513663915332554667339.jpg" alt="Orthopedics Logo" />
                            </div>
                            <h1 className='text-2xl font-bold text-center'>Gynecological</h1>
                            <p className='text-center'>Gynecological services address women is health needs, including reproductive health, screenings, and treatments for various conditions.</p>
                            <div className='flex items-center justify-center'>
                                <button className=' text-secondary text-base'>Read More +</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;