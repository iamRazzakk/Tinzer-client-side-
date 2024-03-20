import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <footer className="footer bg-primary p-10 text-white">
                <aside className="lg:p-4">
                    <h1 className="text-3xl font-bold">Tinzer</h1>
                    <p>Md Abdur Razzak Ltd.</p>
                    <p>Providing reliable tech since 1992</p>
                </aside>
                <nav className="lg:p-4">
                    <h6 className="text-3xl font-bold text-white">Departments
                    </h6>
                    <a className="link link-hover">COVID-19 Testing</a>
                    <a className="link link-hover">Appointment</a>
                    <a className="link link-hover">Orthopedics</a>
                    <a className="link link-hover">Birth Control</a>
                    <a className="link link-hover">X-Ray</a>
                </nav>
                <nav className="lg:p-4">
                    <h6 className="text-3xl font-bold text-white">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Our Service</a>
                    <a className="link link-hover">Our Team</a>
                </nav>
                <nav className="lg:p-4">
                    <h6 className="text-3xl font-bold text-white">Official Info
                    </h6>
                    <a className="flex items-center gap-4 ">
                        <FaLocationDot></FaLocationDot>
                        <div>
                            <h4>Location</h4>
                            <p>Chittagong, Bangladesh</p>
                        </div>
                    </a>
                    <a className="flex items-center gap-4 ">
                        <MdEmail></MdEmail>
                        <div>
                            <h4>Email</h4>
                            <p className="link link-hover">mdabdurrazzakrakib290@gmail.com</p>
                        </div>
                    </a>
                    <a className="flex items-center gap-4 ">
                        <FaPhoneAlt></FaPhoneAlt>
                        <div>
                            <h4>Phone</h4>
                            <p className="link link-hover">+880 1878265664</p>
                        </div>
                    </a>
                </nav>
            </footer>
        </div>
    )
}
