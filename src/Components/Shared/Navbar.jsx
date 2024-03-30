import { FaHeadphones, FaPhone, FaLocationArrow } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import '../utility/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import '../utility/doctors.css'
import logoImg from '../../assets/Picture/Logo/logo.png'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [dropdownActive, setDropdownActive] = useState(false);

    const handleLogout = () => {
        logOut()
        navigate('/sing-in')
    }

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    }
    return (
        <div>
            <div className="flex justify-between items-center lg:gap-8 bg-primary text-white h-20">
                <div className=" -white flex-1 flex items-center justify-center gap-4">
                    <p className="md:w-8 h-8 rounded-full "><FaHeadphones className="w-6 items-center flex justify-center ml-1 h-6"></FaHeadphones></p>
                    <h3>Your Trusted Service Provider</h3>
                </div>
                {/* phone */}
                <div className="flex-1 flex items-center justify-center gap-4">
                    <p className="md:w-8 h-8 rounded-full   "><FaPhone className="w-6 items-center flex justify-center ml-1 h-6"></FaPhone></p>
                    <h3>+880 1878265664</h3>
                </div>
                {/* Location */}
                <div className="flex-1 flex items-center justify-center gap-4">
                    <p className="md:w-8 h-8 rounded-full "><FaLocationArrow className="w-6 items-center flex justify-center ml-1 h-6"></FaLocationArrow></p>
                    <h3>2767 Sunrise Street, NY 1002, USA</h3>
                </div>
                {/* dashboard and login */}
                <div className="flex-1 flex items-center justify-center   -white">
                    {
                        user ? <div className="flex-1 flex">
                            <button onClick={handleLogout} className="bg-white text-[#07092b] p-2 rounded-xl text-sm font-bold">Logout</button>
                            <ul>
                                <Link to='dashboard/profile'>
                                    <li className=" text-white p-2 rounded-xl text-sm font-bold">Dashboard</li>
                                </Link>
                            </ul>
                        </div>
                            : <div className="flex-1">
                                <div className="flex items-center justify-evenly gap-4 ">
                                    <div className="icon flex items-center justify-center lg:gap-4">
                                        <FaFacebook className="facebook p-1 rounded-full w-5 h-5"></FaFacebook>
                                        <FaTwitter className="twitter rounded-full w-5 h-5"></FaTwitter>
                                        <FaLinkedin className="linkedin rounded-full w-5 h-5"></FaLinkedin>
                                    </div>
                                    <Link to='/sing-in'>
                                        <button className="text-white">Sing In</button>
                                    </Link>
                                    <Link to='/sing-up'>
                                        <button className="bg-white text-[#07092b] p-2 rounded-xl text-sm font-bold">Sing Up</button>
                                    </Link>
                                </div>
                            </div>
                    }
                </div>
            </div>

            <nav className="text-black flex items-center justify-between px-8 lg:mt-2">
                <div className="flex-1">
                    <img src={logoImg} alt="" />
                </div>
                <div className="flex-1 lg:flex items-center justify-center">
                    <ul className="nav-menu">
                        <li className=" text-primary px-4 py-2 rounded nav-item"><Link>Home</Link></li>
                        <li className=" text-primary px-4 py-2 rounded nav-item dropdown">
                            <Link onClick={toggleDropdown}>Service</Link>
                            <div className={`dropdown-content ${dropdownActive ? 'active' : ''}`}>
                                <Link to={'specialities'}>Live Consultation</Link>
                                <Link>Health Pack</Link>
                                <Link>Service 3</Link>
                            </div>
                        </li>
                        <li className=" text-primary px-4 py-2 rounded nav-item"><Link>About</Link></li>
                        <li className=" text-primary px-4 py-2 rounded nav-item"><Link>Contact</Link></li>
                        <Link to='/booking'>
                            <button className="bg-secondary text-white px-4 py-2 rounded">Book Appointment</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;