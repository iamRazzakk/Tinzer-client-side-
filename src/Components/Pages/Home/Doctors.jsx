import doctor1 from '../Home/../../../assets/Picture/Doctors/image6 (2).jpg'
import doctor2 from '../Home/../../../assets/Picture/Doctors/image6.jpg'
import doctor3 from '../Home/../../../assets/Picture/Doctors/image7.jpg'
import '../../utility/doctors.css'
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Doctors = () => {
    return (
        <div className="bg-black text-white">
            <div className=" text-center lg:pt-32 space-y-4">
                <h6 className="">Our Doctors</h6>
                <h1 className="text-5xl font-bold">Specialized Doctors</h1>
                <p>Access specialized doctors remotely, ensuring tailored care and expert guidance for your health needs.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:mt-16 lg:px-10 w-full m-autojustify-items-center">
                <div className='cardFull img-container'>
                    <img className='h-[367px] card-imgg' src={doctor1} alt="" />
                    <h1 className='text-2xl font-bold'>Dr. James Adult</h1>
                    <p className='text-secondary'>Cardiologist</p>
                    <div className='flex items-center justify-center gap-6 text-3xl icons'>
                        <a href='https://www.facebook.com/profile.php?id=100089884363943' target='_blank'> <FaFacebook className='facebook'></FaFacebook></a>
                        <a href='https://twitter.com/rakibt23p' target='_blank'> <FaTwitter className='twitter'></FaTwitter></a>
                        <a href='https://www.linkedin.com/in/razzak392/' target='_blank'><FaLinkedin className='linkedin'></FaLinkedin></a>
                    </div>
                </div>
                <div className='img-container '>
                    <img src={doctor2} alt="" />
                    <h1 className='text-2xl font-bold'>Dr. James Adult</h1>
                    <p className='text-secondary'>Cardiologist</p>
                    <div className='flex items-center justify-center gap-6 text-3xl icons'>
                        <a href='https://www.facebook.com/profile.php?id=100089884363943' target='_blank'> <FaFacebook className='facebook'></FaFacebook></a>
                        <a href='https://twitter.com/rakibt23p' target='_blank'> <FaTwitter className='twitter'></FaTwitter></a>
                        <a href='https://www.linkedin.com/in/razzak392/' target='_blank'><FaLinkedin className='linkedin'></FaLinkedin></a>
                    </div>
                </div>
                <div className='img-container'>
                    <img src={doctor3} alt="" />
                    <h1 className='text-2xl font-bold'>Dr. James Adult</h1>
                    <p className='text-secondary'>Cardiologist</p>
                    <div className='flex items-center justify-center gap-6 text-3xl icons'>
                        <a href='https://www.facebook.com/profile.php?id=100089884363943' target='_blank'> <FaFacebook className='facebook'></FaFacebook></a>
                        <a href='https://twitter.com/rakibt23p' target='_blank'> <FaTwitter className='twitter'></FaTwitter></a>
                        <a href='https://www.linkedin.com/in/razzak392/' target='_blank'><FaLinkedin className='linkedin'></FaLinkedin></a>
                    </div>
                </div>
                <div className='img-container '>
                    <img src={doctor2} alt="" />
                    <h1 className='text-2xl font-bold'>Dr. James Adult</h1>
                    <p className='text-secondary'>Cardiologist</p>
                    <div className='flex items-center justify-center gap-6 text-3xl icons'>
                        <a href='https://www.facebook.com/profile.php?id=100089884363943' target='_blank'> <FaFacebook className='facebook'></FaFacebook></a>
                        <a href='https://twitter.com/rakibt23p' target='_blank'> <FaTwitter className='twitter'></FaTwitter></a>
                        <a href='https://www.linkedin.com/in/razzak392/' target='_blank'><FaLinkedin className='linkedin'></FaLinkedin></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctors;