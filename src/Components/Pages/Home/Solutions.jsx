import { FaCheckCircle } from "react-icons/fa";
import '../../utility/About.css'
import appointmentImg from "../../../assets/Picture/appointment-bg-1.jpg"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const Solutions = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="lg:flex items-center bg-black justify-center">
            <div className="flex-1 lg:p-16 text-white">
                <div className="space-y-3">
                    <h6>Best Solutions</h6>
                    <h1 className="text-4xl font-bold">
                        Awesome Smart Health Can Make Your Life Easier
                    </h1>
                    <p>Smart health technologies streamline healthcare, offering convenience and personalized care. From wearables to telemedicine, they empower proactive health management. Integration into daily life fosters healthier lifestyles.</p>
                </div>
                <div className="grid grid-cols-2 gap-6 lg:mt-4">
                    <div className="flex bg-primary rounded lg:px-6 lg:py-6 items-center justify-center gap-4 gridHover">
                        <FaCheckCircle className="text-secondary"></FaCheckCircle>
                        <p className="text-white text-base">Top Professional Team</p>
                    </div>
                    <div className="flex bg-primary rounded lg:px-6 lg:py-6 items-center justify-center gap-4 gridHover">
                        <FaCheckCircle className="text-secondary"></FaCheckCircle>
                        <p className="text-white text-base">Multi-Functional Hospital</p>
                    </div>
                    <div className="flex bg-primary rounded lg:px-6 lg:py-6 items-center justify-center gap-4 gridHover">
                        <FaCheckCircle className="text-secondary"></FaCheckCircle>
                        <p className="text-white text-base">World Class Dental</p>
                    </div>
                    <div className="flex bg-primary rounded lg:px-6 lg:py-6 items-center justify-center gap-4 gridHover">
                        <FaCheckCircle className="text-secondary"></FaCheckCircle>
                        <p className="text-white text-base">20+ Years Of Experience</p>
                    </div>
                    <div className="flex bg-primary rounded lg:px-6 lg:py-6 items-center justify-center gap-4 gridHover">
                        <FaCheckCircle className="text-secondary"></FaCheckCircle>
                        <p className="text-white text-base">Discount On Treatment</p>
                    </div>
                    <div className="flex bg-primary rounded lg:px-6 lg:py-6 items-center justify-center gap-4 gridHover">
                        <FaCheckCircle className="text-secondary"></FaCheckCircle>
                        <p className="text-white text-base">Top Professional Specialist</p>
                    </div>
                </div>
                <button className="relative lg:mt-10 items-center justify-start inline-block px-8 py-5 overflow-hidden font-medium transition-all bg-[#2490eb] rounded hover:bg-primary group">
                    <span className="absolute inset-0 border-0  ease-linear duration-100 transition-all border-white rounded-xl"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Contact Us</span>
                </button>
            </div>
            <div className="flex-1">
                <img className="relative lg:pr-24" src={appointmentImg} alt="" />
                <div className="absolute rounded-lg lg:-mt-[420px] lg:ml-40 lg:p-10 text-white bg-black">
                    <h2 className="text-2xl font-bold text-center">Book An Appointment</h2>
                    <form className="card-body md:space-y-4 bg-none text-white ">
                        <div className="form-control bg-black text-white">
                            <input type="text" placeholder="Enter Your Name" className=" p-3 rounded-lg bg-black text-white border border-white" required />
                        </div>
                        <div className="form-control bg-black text-white">

                            <input type="text" placeholder="Phone Number" className=" p-3 rounded-lg bg-black text-white border border-white" required />
                        </div>
                        <div className="form-control">
                            <select className="p-3 rounded-lg bg-black text-white border border-white" name="cars" id="cars">
                                <option value="volvo">Select Doctor</option>
                                <option value="Myles">Dr Myles</option>
                                <option value="Abbed">Dr Khalid Abbed</option>
                                <option value="Trehan">Dr Naresh Trehan</option>
                                <option value="Abright">Dr Arthur Reese Abright</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <DatePicker className="p-3 rounded-lg w-full bg-black text-white border border-white" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Solutions;