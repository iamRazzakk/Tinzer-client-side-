
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa6';
import SingUpImg from '../../../src/assets/Picture/Service/login.jpg'
import useAxiosPublic from '../Hooks/AxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../Shared/AuthProvider';
import auth from '../utility/Firebase/Firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';
const SingUpForm = () => {
    const IMG_API_KEY = '95e0e6f1790d5b0a2184be49e4a99407'
    const navigate = useNavigate()
    const { currentUser, loginWithGoogle } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const handleLoginWithGoogle = () => {
        loginWithGoogle(auth, GoogleAuthProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        // console.log('click');
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const { data } = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${IMG_API_KEY}`, formData);
        console.log(name, password, email);
        currentUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/')
                const userDetails = {
                    name: name,
                    email: email,
                    password: password,
                    image: data.data.url,
                };

                axiosPublic.post('/users', userDetails)
                    .then(() => {
                        // console.log(user);
                        const user = { email, password }

                        console.log(user)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => console.log(error))
    }

    return (
        <di className='flex items-center'>
            <di className='flex-1'>
                <img className='lg:h-[710px] w-full object-cover' src={SingUpImg} alt="" />
            </di>
            <div className='flex-1 bg-primary lg:p-10'>
                <div className="text-4xl text-center font-bold text-white ">
                    WelCome Please Sing Up
                </div>
                <form onSubmit={handleSubmit} className="card-body lg:p-10 lg:space-y-6">
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
                        <button className="bg-[#3d90e9] text-white py-3 rounded-full button">Sing Up</button>
                    </div>
                    <h1 className="text-center text-white font-bold">All ready have an account<Link className="text-blue-500" to={'/sing-in'}> Login</Link></h1>
                    <hr className="bg-black" />
                    <p className="text-2xl flex gap-4 mx-auto cursor-pointer"><FcGoogle onClick={handleLoginWithGoogle} className="cursor-pointer"></FcGoogle> <FaGithub className="bg-black rounded-full"></FaGithub></p>
                </form >
            </div>
        </di>
    )
}
export default SingUpForm;
