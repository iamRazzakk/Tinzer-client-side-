import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import doctorImage from '../../../assets/Picture/Doctors/image6 (2).jpg'
import doctorImage2 from '../../../assets/Picture/Doctors/image6.jpg'
import doctorImage3 from '../../../assets/Picture/Doctors/image7.jpg'


const Testimonial = () => {
    return (
        <div className='bg-primary lg:p-16'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-black relative p-10'>
                    <div className='flex items-center justify-center mb-10 '>
                        <FaQuoteLeft className='absolute p-3 text-7xl text-secondary rounded-full  bg-white'></FaQuoteLeft>
                    </div>
                    <div className='text-center md:mt-10 text-white'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis numquam repudiandae possimus ducimus a!</p>
                        <div className='flex items-center justify-center'>
                            <img className='w-16 h-16 object-cover rounded-lg lg:mb-4 lg:mt-5' src={doctorImage2} alt="" />
                        </div>
                        <h3 className='font-bold'>Steven Jony</h3>
                        <h1>Manager</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-black relative p-10'>
                    <div className='flex items-center justify-center mb-10 '>
                        <FaQuoteLeft className='absolute p-3 text-7xl text-secondary rounded-full  bg-white'></FaQuoteLeft>
                    </div>
                    <div className='text-center md:mt-10 text-white'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis numquam repudiandae possimus ducimus a!</p>
                        <div className='flex items-center justify-center'>
                            <img className='w-16 h-16 object-cover rounded-lg lg:mb-4 lg:mt-5' src={doctorImage} alt="" />
                        </div>
                        <h3 className='font-bold'>Steven Jony</h3>
                        <h1>Manager</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-black relative p-10'>
                    <div className='flex items-center justify-center mb-10 '>
                        <FaQuoteLeft className='absolute p-3 text-7xl text-secondary rounded-full  bg-white'></FaQuoteLeft>
                    </div>
                    <div className='text-center md:mt-10 text-white'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis numquam repudiandae possimus ducimus a!</p>
                        <div className='flex items-center justify-center'>
                            <img className='w-16 h-16 object-cover rounded-lg lg:mb-4 lg:mt-5' src={doctorImage3} alt="" />
                        </div>
                        <h3 className='font-bold'>Steven Jony</h3>
                        <h1>Manager</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-black relative p-10'>
                    <div className='flex items-center justify-center mb-10 '>
                        <FaQuoteLeft className='absolute p-3 text-7xl text-secondary rounded-full  bg-white'></FaQuoteLeft>
                    </div>
                    <div className='text-center md:mt-10 text-white'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis numquam repudiandae possimus ducimus a!</p>
                        <div className='flex items-center justify-center'>
                            <img className='w-16 h-16 object-cover rounded-lg lg:mb-4 lg:mt-5' src={doctorImage} alt="" />
                        </div>
                        <h3 className='font-bold'>Steven Jony</h3>
                        <h1>Manager</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;