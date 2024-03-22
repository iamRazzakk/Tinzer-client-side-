import { useQuery } from "@tanstack/react-query";


const Profile = () => {
    const { data: users } = useQuery({
        queryKey: 'users',
        queryFn: () => {
            return fetch("http://localhost:5000/users")
                .then((res) => res.json());
        },
    });
    console.log(users)
    return (
        <div className="lg:p-6 lg:flex items-center">
            {
                users?.map(user => (
                    <div key={user._id} className="lg:p-6 gap-8 lg:flex justify-between items-center">
                        <img className="w-96 h-96 object-cover rounded-full" src={user?.image} alt="" />
                        <div className="text-primary">
                            <h1 className="text-3xl font-bold">{user?.name}</h1>
                            <h3>{user?.email}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Profile;