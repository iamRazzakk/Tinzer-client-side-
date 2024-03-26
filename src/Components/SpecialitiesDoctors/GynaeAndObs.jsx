import { useQuery } from "@tanstack/react-query";
import { MdLaptopChromebook } from "react-icons/md";
import { Link } from "react-router-dom";


const GynaeAndObs = () => {
    const { data: specialities } = useQuery({
        queryKey: 'specialities',
        queryFn: () => {
            return fetch("http://localhost:5000/specialities-doctor")
                .then((res) => res.json());
        },
    });
    const isGaynaeAndObs = specialities?.filter(doctor => doctor.specialist === "Gynecologist");

    console.log(isGaynaeAndObs)
    const GaynaeAndObs = isGaynaeAndObs?.length > 0 ? isGaynaeAndObs[0] : null;
    console.log(GaynaeAndObs?.title)
    return (
        <div className="lg:flex gap-6">
            <div>
                filter section
            </div>
            <div className="flex-1">
                <div className="lg:mt-10 text-white">
                    <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row   dark:border-secondary dark:bg-primary lg:h-[194px] w-full  ">
                        <img className="flex-1" src={GaynaeAndObs?.image} alt="" />
                        <div className="flex  flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{GaynaeAndObs?.doctor_name}</h5>
                            <p className="mb-3 font-normal dark:text-white">{GaynaeAndObs?.title}</p>
                            <p className="mb-3 font-normal dark:text-white">{GaynaeAndObs?.specialist}</p>
                        </div>
                        <div className="flex-1">
                            <p className="mb-3 font-normal dark:text-white">Price: {GaynaeAndObs?.price}</p>
                            <Link>
                                Book now:<MdLaptopChromebook className="text-2xl"> </MdLaptopChromebook>
                            </Link>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default GynaeAndObs;