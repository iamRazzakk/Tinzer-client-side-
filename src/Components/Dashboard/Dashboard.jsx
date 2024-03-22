import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    const { data: users } = useQuery({
        queryKey: 'users',
        queryFn: () => {
            return fetch("http://localhost:5000/users")
                .then((res) => res.json());
        },
    });
    const isAdmin = users?.filter(user => user.role === "Admin");
    console.log(isAdmin);
    return (
        <div className="text-white font-Poppins flex md:mt-10 max-w-3xl lg:max-w-screen-xl">
            <div className="w-40 md:w-64 min-h-full bg-primary">
                {/* Your menu items */}

                <ul className="menu md:p-6  md:text-xl">
                    {/* For admin  */}
                    {isAdmin ? <>
                        <li className="md:mb-4"><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                        <li className="md:mb-4"><NavLink to='/dashboard/request-doctor'>Doctor Approval</NavLink></li>
                        <li className="md:mb-4"><NavLink to='/dashboard/request-doctor'>Medical History & Record</NavLink></li>
                        <li className="md:mb-4"><NavLink to='/dashboard/request-doctor'>Feedback and Reviews</NavLink></li>
                        <li className="md:mb-4"><NavLink to='/dashboard/total-users'>Total User</NavLink></li>
                    </> : <></>
                    }
                </ul>

            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>

    );
};

export default Dashboard;