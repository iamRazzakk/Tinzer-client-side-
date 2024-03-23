import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub } from 'react-icons/fa6';
import SingInImg from '../../../src/assets/Picture/Service/Singin.jpg'
// import 'animate.css';
import { useContext } from "react";
import { AuthContext } from './../Shared/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../utility/Firebase/Firebase.config";
import { Swal } from 'sweetalert2';

export default function SingInForm() {
    const { loginWithGoogle, signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLoginWithGoogle = () => {
        loginWithGoogle(auth, GoogleAuthProvider)
            .then(result => {
                const user = result.user
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    background: "3d90e9",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Sign in successfully"
                });

                navigate('/')
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: "Custom animation with Animate.css",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                navigate('/');
            });
    }
    return (
        <div className="lg:flex items-center">
            <div className="flex-1">
                <img className="h-[710px] w-full object-cover" src={SingInImg} alt="" />
            </div>
            <div className='flex-1 bg-primary lg:p-10'>
                <div className="text-4xl text-center font-bold text-white ">
                    WelCome Please Sing In
                </div>
                <form onSubmit={handleLogin} className="card-body lg:p-10 lg:space-y-6">
                    < div className="form-control" >

                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-white " required />
                    </div >
                    <div className="form-control">

                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-white " required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-[#3d90e9] text-white py-3 rounded-full button">Login</button>
                    </div>
                    <h1 className="text-center text-white font-bold">All ready have an account<Link className="text-blue-500" to={'/sing-up'}> Sing Up</Link></h1>
                    <hr className="bg-black" />
                    <p className="text-2xl flex gap-4 mx-auto cursor-pointer"><FcGoogle onClick={handleLoginWithGoogle} className="cursor-pointer"></FcGoogle> <FaGithub className="bg-black rounded-full"></FaGithub></p>
                </form >
            </div>
        </div>
    )
}
