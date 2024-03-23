import { FaUserDoctor } from "react-icons/fa6";
import useFetchedData from '../Hooks/useFetchedData';
import ScaleLoader from "react-spinners/ClipLoader";

const AllUsers = () => {
    const { data: userData, isLoading: isUserDataLoading } = useFetchedData('users');
    const handleMakeDoctor = () => {
        console.log("doctors")
    }
    return (
        <div className="lg:px-10">
            {isUserDataLoading ? (
                <div><ScaleLoader
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
                            <th className="px-4 py-2">Actions</th> {/* Header for actions column */}
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map(user => (
                            <tr key={user._id}>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2 flex justify-center items-center">
                                    <button onClick={handleMakeDoctor} className="btn bg-none text-secondary lg:text-2xl py-2">
                                        <FaUserDoctor />
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