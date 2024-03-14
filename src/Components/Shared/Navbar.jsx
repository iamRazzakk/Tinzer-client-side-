import { FaHeadphones, FaPhone, FaLocationArrow } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <div className="flex justify-center items-center bg-[#07092b]">
                <div className="flex items-center justify-center gap-4 p-2 text-white">
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
                    <div className="flex items-center justify-evenly gap-4 ">
                        <FaFacebook className="bg-white rounded-full w-5 h-5"></FaFacebook>
                        <FaTwitter className="bg-white rounded-full w-5 h-5"></FaTwitter>
                        <FaLinkedin className="bg-white rounded-full w-5 h-5"></FaLinkedin>
                        <button className="text-white">Sing In</button>
                        <button className="bg-white text-[#07092b] p-2 rounded-xl text-sm font-bold">Sing Up</button>
                    </div>
                </div>
            </div>

            <nav className="navbar">
                <div className="md:flex items-center justify-between">
                    <div className="flex-1">
                        <h1>Logo</h1>
                    </div>
                    <div className="flex-1">
                        <ul className="nav-menu">
                            <li className="nav-item"><Link>Home</Link></li>
                            <li className="nav-item"><Link>About</Link></li>
                            <li className="nav-item"><Link>Contact</Link></li>
                            <li className="nav-item dropdown">
                                <Link>Service</Link>
                                <div className="dropdown-content">
                                    <Link>Service 1</Link>
                                    <Link>Service 2</Link>
                                    <Link>Service 3</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <button>Book Appointment</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;