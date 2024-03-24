import { useQuery } from "@tanstack/react-query";
import { useContext, useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from './../Shared/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);
    const { data: users, isLoading } = useQuery({
        queryKey: 'users',
        queryFn: () => {
            return fetch("http://localhost:5000/users")
                .then((res) => res.json());
        },
    });

    useEffect(() => {
        if (users) {
            const foundUser = users.find(u => u.email === user?.email);
            setCurrentUser(foundUser);
        }
    }, [users, user]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!currentUser) {
        return null;
    }

    return (
        <div className="text-white font-Poppins flex md:mt-10 max-w-3xl lg:max-w-screen-xl">
            <div className="w-40 md:w-64 min-h-full bg-primary">
                {/* Your menu items */}

                <ul className="menu md:p-6  md:text-xl">
                    {/* Show admin dashboard if current user is admin */}
                    {currentUser?.role === "Admin" &&
                        <>
                            <li className="md:mb-4"><NavLink to='/dashboard/profile'>Admin Profile</NavLink></li>
                            <li className="md:mb-4"><NavLink to='/dashboard/admin-dashboard'>Admin Dashboard</NavLink></li>
                            <li className="md:mb-4"><NavLink to='/dashboard/users'>All User</NavLink></li>
                            {/* Add other admin-specific menu items */}
                        </>
                    }
                    {/* Show user dashboard if current user is not admin */}
                    {currentUser?.role === "user" &&
                        <>
                            <li className="md:mb-4"><NavLink to='/dashboard/profile'>User Profile</NavLink></li>
                            
                            {/* Add other user-specific menu items */}
                        </>
                    }
                    {currentUser?.role === "doctor" &&
                        <>
                            <li className="md:mb-4"><NavLink to='/dashboard/profile'>User Profile</NavLink></li>
                            <li className="md:mb-4"><NavLink to='/dashboard/client'>Client</NavLink></li>
                            {/* Add appointment */}
                        </>
                    }
                </ul>

            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div >
    );
};

export default Dashboard;