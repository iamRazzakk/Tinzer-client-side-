

const AppointMent = () => {
    return (
        <div className="text-primary">
            <div className="text-primary">
                <form className="card-body min-h-screen rounded-t-lg bg-secondary lg:px-28 lg:space-y-6 lg:w-2/3 lg:mx-auto">
                    <h1 className="text-center text-3xl font-bold text-white">Book Your Appointment</h1>
                    < div className="form-control" >

                        <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered bg-white " required />
                    </div >
                    < div className="form-control" >

                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-white " required />
                    </div >
                    <div className="form-control">
                        <input type="number" name="phone" placeholder="Enter your Phone Number" className="input input-bordered bg-white " required />
                    </div>
                    <div className="form-control">
                        <select className="p-3 rounded-lg bg-white text-primary border border-white" name="cars" id="cars">
                            <option value="volvo">Select Doctor</option>
                            <option value="Myles">Dr Myles</option>
                            <option value="Abbed">Dr Khalid Abbed</option>
                            <option value="Trehan">Dr Naresh Trehan</option>
                            <option value="Abright">Dr Arthur Reese Abright</option>
                        </select>
                    </div>
                    {/* button */}
                    <a className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Submit</span>
                        <span className="relative invisible">Submit</span>
                    </a>
                </form >
            </div>
        </div>
    );
};

export default AppointMent;