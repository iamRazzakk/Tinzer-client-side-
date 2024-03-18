import image from '../../../assets/Picture/bg-img.png'
import image1 from '../../../assets/Picture/wh-img-2.jpg'
import image2 from '../../../assets/Picture/wh-img-5.jpg'
import '../../../Components/utility/About.css'
import { FaCheckCircle } from "react-icons/fa";

// for Swiperjs
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import partnerImg from '../../../assets/Picture/Partner/partner-1.png'
import partnerImg1 from '../../../assets/Picture/Partner/partner-2.png'
import partnerImg2 from '../../../assets/Picture/Partner/partner-3.png'
import partnerImg3 from '../../../assets/Picture/Partner/partner-4.png'
import partnerImg4 from '../../../assets/Picture/Partner/partner-5.png'
import partnerImg5 from '../../../assets/Picture/Partner/partner-6.png'
// import partnerImg6 from '../../../assets/Picture/Partner/partner-7.png'


const ChooseUs = () => {
    return (
        <div className='lg:h-[800px]  bg-secondary'>

            <div className="lg:flex items-center justify-center ">
                <div className="flex-1 lg:p-10 space-y-4 text-white">
                    <h6 className="text-primary">Why Choose us</h6>
                    <h3 className="text-4xl font-bold ">
                        Owr Best Services & Quite Popular Online Treatment
                    </h3>
                    <div className="bg-cover bg-center md:bg-size " style={{ backgroundImage: `url(${image})` }}>
                        <img className='relative rounded-lg lg:mt-10' src={image2} alt="" />
                        <img className='absolute lg:-mt-48 lg:ml-28 rounded-lg' src={image1} alt="" />
                    </div>
                </div>
                <div className="flex-1 space-y-4 lg:p-4">
                    <div className="flex gap-4">
                        <div className='text-7xl rounded-full h-16 w-16 lg:p-2 bg-white flex items-center justify-center gridHover'>
                            <FaCheckCircle></FaCheckCircle>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                Mental health Solutions
                            </h1>
                            <p className='text-white md:mt-2'>Empower your mental wellness journey with our tailored telemedicine solutions. Access professional support conveniently, fostering holistic healing and resilience.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 lg:mt-10">
                        <div className='text-7xl rounded-full h-16 w-16 lg:p-2 bg-white flex items-center justify-center gridHover'>
                            <FaCheckCircle></FaCheckCircle>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                Rapid Patient Improvement
                            </h1>
                            <p className='text-white md:mt-2'>Empower your mental wellness journey with our tailored telemedicine solutions. Access professional support conveniently, fostering holistic healing and resilience.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 lg:mt-10">
                        <div className='text-7xl rounded-full h-16 w-16 lg:p-2 bg-white flex items-center justify-center gridHover'>
                            <FaCheckCircle></FaCheckCircle>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                World Class Treatment
                            </h1>
                            <p className='text-white md:mt-2'>Empower your mental wellness journey with our tailored telemedicine solutions. Access professional support conveniently, fostering holistic healing and resilience.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:mt-20 lg:p-10'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <img className='partnerImg' src={partnerImg} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='partnerImg'><img src={partnerImg1} alt="" /></SwiperSlide>
                    <SwiperSlide className='partnerImg'><img src={partnerImg2} alt="" /></SwiperSlide>
                    <SwiperSlide className='partnerImg'><img src={partnerImg3} alt="" /></SwiperSlide>
                    <SwiperSlide className='partnerImg'><img src={partnerImg4} alt="" /></SwiperSlide>
                    <SwiperSlide className='partnerImg'><img src={partnerImg5} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ChooseUs;