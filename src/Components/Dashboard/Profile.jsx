import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from './../Shared/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { data: users } = useQuery({
        queryKey: 'users',
        queryFn: () => {
            return fetch("http://localhost:5000/users")
                .then((res) => res.json());
        },
    });

    // Find the profile of the currently logged-in user
    const currentUser = users?.find(u => u.email === user?.email);

    return (
        <div className="lg:p-6 lg:flex items-center">
            {currentUser && (
                <div className="lg:p-6 gap-8 lg:flex justify-between items-center">
                    <img className="w-96 h-96 object-cover rounded-full" src={currentUser.image} alt="" />
                    <div className="text-primary">
                        <h1 className="text-3xl font-bold">{currentUser.name}</h1>
                        <h3>{currentUser.email}</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
