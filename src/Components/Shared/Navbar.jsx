import { FaHeadphones, FaPhone, FaLocationArrow } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-[#07092b]">
                <div className="flex items-center justify-center gap-4 border border-red-500 text-white">
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <p className="md:w-8 h-8 rounded-full border"><FaHeadphones className="w-6 items-center flex justify-center ml-1 h-6"></FaHeadphones></p>
                        <h3>Your Trusted Service Provider</h3>
                    </div>
                    {/* phone */}
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <p className="md:w-8 h-8 rounded-full border"><FaPhone className="w-6 items-center flex justify-center ml-1 h-6"></FaPhone></p>
                        <h3>+880 1878265664</h3>
                    </div>
                    {/* Location */}
                    <div className="flex-1 flex items-center justify-center gap-4">
                        <p className="md:w-8 h-8 rounded-full border"><FaLocationArrow className="w-6 items-center flex justify-center ml-1 h-6"></FaLocationArrow></p>
                        <h3>2767 Sunrise Street, NY 1002, USA</h3>
                    </div>
                </div>
                <div className="flex-1">
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;