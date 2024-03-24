import { FaDeleteLeft, FaUserDoctor } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import ScaleLoader from "react-spinners/ClipLoader";
import useAxiosPublic from "../Hooks/AxiosPublic";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const AllUsers = () => {
    const axiosPublic = useAxiosPublic();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch("http://localhost:5000/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setIsLoading(false);
            });
    };

    const handleMakeDoctor = (email) => {
        axiosPublic.post(`/doctors/${email}`)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "success",
                        showCancelButton: false,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "OK"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const updatedUsers = users.map(user => {
                                if (user.email === email) {
                                    return { ...user, role: "doctor" };
                                }
                                return user;
                            });
                            setUsers(updatedUsers);
                        }
                    });
                } else {
                    console.error('Failed to update role');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="lg:px-10">
            {isLoading ? (
                <div>
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
            ) : (
                <table className="table-auto text-primary ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Actions</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map(user => (
                            <tr key={user?._id}>
                                <td className="border px-4 py-2">{user?.name}</td>
                                <td className="border px-4 py-2">{user?.email}</td>
                                <td className="border px-4 py-2 flex justify-center items-center">
                                    {user?.role === "doctor" ? (
                                        <button className="btn bg-none text-primary lg:text-2xl py-2 ml-2">
                                            <FaUserDoctor />
                                        </button>
                                    ) : (
                                        <button onClick={() => handleMakeDoctor(user?.email)} className="btn bg-none text-secondary lg:text-2xl py-2 ml-2">
                                            <FaUser />
                                        </button>
                                    )}
                                </td>
                                <td className="border px-4 py-2">
                                    <button className="btn bg-none text-secondary lg:text-2xl py-2">
                                        <FaDeleteLeft />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AllUsers;