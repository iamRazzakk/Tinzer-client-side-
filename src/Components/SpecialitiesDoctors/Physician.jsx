import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import { FaVideo } from "react-icons/fa6";

const Physician = () => {
    const { data: specialities } = useQuery({
        queryKey: 'specialities',
        queryFn: () => {
            return fetch("http://localhost:5000/specialities-doctor")
                .then((res) => res.json());
        },
    });
    const isPhysician = specialities?.filter(doctor => doctor.specialist === "Physician");

    console.log(isPhysician)
    const physician = isPhysician?.length > 0 ? isPhysician[0] : null;
    console.log(physician?.title)

    return (
        <div className="lg:flex gap-6">
            <div>
                filter section
            </div>
            <div className="flex-1">
                <div className="lg:mt-10 text-white">
                    <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row   dark:border-secondary dark:bg-primary lg:h-[194px] w-full  ">
                        <img className="flex-1 w-20 p-10  h-full object-cover" src={physician?.image} alt="" />
                        <div className="flex flex-1  flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{physician?.doctor_name}</h5>
                            <p className="mb-3 font-normal dark:text-white">{physician?.title}</p>
                            <p className="mb-3 font-normal dark:text-white">{physician?.specialist}</p>
                        </div>
                        <div className="flex-1">
                            <p className="mb-3 font-normal dark:text-white">Consultation fee: {physician?.price}</p>

                            <div className="lg:mt-10 ">
                                <Link to="/book-now">
                                    <button className="flex items-center gap-3 bg-secondary px-3 py-4 rounded-lg">
                                        <FaVideo></FaVideo>
                                        <h1>See Doctor Now</h1>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Physician;