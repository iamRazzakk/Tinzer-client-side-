import ServiceImage from '../../../assets/Picture/woman.jpg'
import '../../utility/About.css'
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
                            <div className='flex items-center justify-center'>
                                <img className='w-16  h-16 rounded-full object-cover' src="https://us.123rf.com/450wm/get4net/get4net2312/get4net231200265/219192887-injection-applied-to-a-woman-for-face-surgery.jpg?ver=6" alt="Dermatology Logo" />
                            </div>
                            <h1 className='text-2xl font-bold text-center'>Dermatology</h1>
                            <p className='text-center'>Dermatology specializes in diagnosing and treating skin conditions, promoting skin health and overall well-being.</p>
                            <div className='flex items-center justify-center'>
                                <button className='  text-secondary text-base'>Read More +</button>
                            </div>
                        </div>
                        <div className='p-4 space-y-4 gridHover border border-black rounded-xl'>
                            <div className='flex items-center justify-center'>
                                <img className='w-16  h-16 rounded-full object-cover' src="https://w7.pngwing.com/pngs/363/476/png-transparent-mental-disorder-mental-health-health-care-health-psychology-silhouette-medical-care.png" alt="Mental Health Logo" />
                            </div>
                            <h1 className='text-2xl font-bold text-center'>Mental Health</h1>
                            <p className='text-center'>Our mental health services offer support and treatment for emotional well-being, fostering resilience and holistic healing.</p>
                            <div className='flex items-center justify-center'>
                                <button className='  text-secondary text-base'>Read More +</button>
                            </div>
                        </div>
                        <div className='p-4 space-y-4 gridHover border border-black rounded-xl'>
                            <div className='flex items-center justify-center'>
                                <img className='w-16  h-16 rounded-full object-cover' src="https://www.clipartmax.com/png/middle/190-1901603_orthopedic-surgeon-bone.png" alt="Orthopedics Logo" />
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