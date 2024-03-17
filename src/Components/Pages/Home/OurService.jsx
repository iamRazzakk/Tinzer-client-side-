import ServiceImage from '../../../assets/Picture/woman.jpg'

const OurService = () => {
    return (
        <div className="bg-[#07092B] text-white">
            <div className="text-center lg:pt-32">
                <h6 className="text-secondary">Our Services</h6>
                <h1 className="text-5xl font-bold">Our Healthcare Services</h1>
                <p>Our comprehensive healthcare services encompass a wide range of specialties and treatments.</p>
            </div>
            <div className="md:flex lg:mt-10">
                <div className="flex-1">
                    <img src={ServiceImage} alt="" />
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;