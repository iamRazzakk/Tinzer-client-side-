import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


export default function SingInForm() {
    return (
        <div>
            <div className='bg-primary lg:p-10'>
                <div className="text-4xl text-center font-bold text-white ">
                    WelCome Please Sing Up
                </div>
                <form  className="card-body lg:p-10 lg:space-y-6">
                    < div className="form-control" >

                        <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered bg-white " required />
                    </div >
                    < div className="form-control" >

                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-white " required />
                    </div >
                    <div className="form-control">

                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-white " required />
                    </div>
                    <div className="form-control">
                        <input className="input input-bordered bg-white " type="file" name="image" id="" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="bg-[#3d90e9] text-white py-3 rounded-full button">Login</button>
                    </div>
                    <h1 className="text-center text-white font-bold">All ready have an account<Link className="text-blue-500" to={'/sing-up'}> Sing Up</Link></h1>
                    <hr className="bg-black" />
                    {/* <p className="text-2xl flex gap-4 mx-auto cursor-pointer"><FcGoogle onClick={handleLoginWithGoogle} className="cursor-pointer"></FcGoogle> <FaGithub className="bg-black rounded-full"></FaGithub></p> */}
                </form >
            </div>
        </div>
    )
}
