import { useContext } from "react";
import { AuthContext } from './../Shared/AuthProvider';
import { useQuery } from "@tanstack/react-query";

const DoctorBooking = () => {
    const { user } = useContext(AuthContext)
    const { data: users } = useQuery({
        queryKey: 'users',
        queryFn: () => {
            return fetch("http://localhost:5000/users")
                .then((res) => res.json());
        },
    });
    const currentUser = users?.find(u => u.email === user?.email);
    return (
        <div className="lg:mt-10 mt-4 lg:flex items-center">
            <div className="flex-1 ">
                <h1>
                    Patient Name: {currentUser?.name}
                </h1>
                <h1>
                    Payment method("Work on it")
                </h1>
            </div>
            <div className="flex-1">
                {/* <img src="" alt="" />
                <h2>Doctor Name: {specialities?.doctor_name}</h2> */}
            </div>
        </div>
    );
};

export default DoctorBooking;
// 