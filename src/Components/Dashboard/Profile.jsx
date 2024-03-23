import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from './../Shared/AuthProvider';
import ScaleLoader from "react-spinners/ClipLoader";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    const { data: users } = useQuery({
        queryKey: 'users',
        queryFn: () => {
            return fetch("http://localhost:5000/users")
                .then((res) => res.json());
        },
    });

    const currentUser = users?.find(u => u.email === user?.email);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    if (isLoading || !currentUser) {
        return (
            <div className="flex items-center justify-center">
                <ScaleLoader
                    color="#07092B"
                    cssOverride={{}}
                    height={100}
                    margin={2}
                    radius={12}
                    speedMultiplier={1}
                    width={50}
                />
            </div>
        );
    }

    return (
        <div className="lg:p-6 lg:flex items-center">
            <div className="lg:p-6 gap-8 lg:flex justify-between items-center">
                <img className="w-96 h-96 object-cover rounded-full" src={currentUser?.image} alt="" />
                <div className="text-primary">
                    <h1 className="text-3xl font-bold">{currentUser?.name}</h1>
                    <h3>{currentUser?.email}</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;
