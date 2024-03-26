/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom';

const Specialities = () => {
    return (
        <div className="lg:p-5">
            <h1 className="text-5xl font-bold">Please Select a specility</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                {/* Physician */}
                <Link to='/physician'>
                    <div className="lg:mt-10">
                        <a className="lg:flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-doctor-icon-circle-png-image_2055257.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">General Physician</h5>
                                <p className="mb-3 font-normal dark:text-white">Cold, flu, fever, vomiting, infections, headaches or any other general health issues.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Gynae and obs */}
                <Link to='/gynae-and-obs'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://w7.pngwing.com/pngs/621/257/png-transparent-obstetrics-and-gynaecology-obstetrics-and-gynaecology-clinic-hospital-obstetrics-s-purple-blue-text-thumbnail.png" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gynae & Obs</h5>
                                <p className="mb-3 font-normal dark:text-white">Any women's health related issues including pregnancy, mentruation fertility issues, hormone disorders etc.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Dermatology */}
                <Link to='/dermatology'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://img.freepik.com/premium-vector/hair-treatment-care-dermatology-logo_579179-937.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dermatology</h5>
                                <p className="mb-3 font-normal dark:text-white">Treatment of diseases related to skin, hair and nails and some cosmetic problems.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Internal medicine */}
                <Link to='/internal-medicine'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://c8.alamy.com/comp/2NKPY5K/internal-medicine-icon-monochrome-simple-sign-from-medical-speialist-collection-internal-medicine-icon-for-logo-templates-web-design-and-infograph-2NKPY5K.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Internal Medicine</h5>
                                <p className="mb-3 font-normal dark:text-white">Prevention, diagnosis, and treatment of adults across the spectrum from health to complex illness.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Gastroenterology */}
                <Link to='/gastroenterology'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://w7.pngwing.com/pngs/880/1013/png-transparent-computer-icons-digestion-gastroenterology-others-text-logo-gastrointestinal-tract-thumbnail.png" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gastroenterology</h5>
                                <p className="mb-3 font-normal dark:text-white">Diseases affecting the gastrointestinal tract, which include the organs from mouth, into anus, along the alimentary ca..</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Psychiatry */}
                <Link to='/psychiatry'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.pinimg.com/736x/6b/ea/bf/6beabf7dafe4c03b4fdf7a426744e351.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Psychiatry</h5>
                                <p className="mb-3 font-normal dark:text-white">Diagnosis, prevention, and treatment of mental disorders related to mood, behiviour, cognition, and perceptions</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* psychology */}
                <Link to='/psychology'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfQZ9PGX7l7o3BtCzy5IrQGWD5-M0DyHuPLOLVeBVLA&s" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">psychology</h5>
                                <p className="mb-3 font-normal dark:text-white">Identify and diagnose mental, behavioral, and emotional disorders</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Orthopedics */}
                <Link to='/orthopedics'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://e7.pngegg.com/pngimages/743/1017/png-clipart-traumatology-orthopaedics-medicine-orthopedic-surgery-ortopedia-text-logo-thumbnail.png" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Orthopedics</h5>
                                <p className="mb-3 font-normal dark:text-white">Bones, muscles, joints, tendons, ligaments.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Nutrition and Food Science */}
                <Link to='/nutrition'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.shutterstock.com/image-vector/food-lab-logo-design-element-260nw-585221546.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nutrition & Food Science</h5>
                                <p className="mb-3 font-normal dark:text-white">Weigt management, Health & amp; wellness, overall well being.</p>
                            </div>
                        </a>
                    </div>
                </Link>

                {/* Urology */}
                <Link to='/urology'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://static.vecteezy.com/system/resources/previews/021/013/487/original/urology-icon-trendy-urology-logo-concept-on-transparent-background-from-health-and-medical-free-png.png" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Urology</h5>
                                <p className="mb-3 font-normal dark:text-white">Diagnosis and treatment of diseases of the male and female urinary-tract system.</p>
                            </div>
                        </a>
                    </div>\
                </Link>
                {/* Ophthalmology */}
                <Link to='/ophthalmology'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://w7.pngwing.com/pngs/139/481/png-transparent-amazing-eyes-optometry-optical-ritu-kapoor-o-d-optometrist-ophthalmology-eye-people-logo-glasses-thumbnail.png" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ophthalmology</h5>
                                <p className="mb-3 font-normal dark:text-white">Diagnosis, treatment of eye disorders.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* ENT */}
                <Link to='/ent'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://t3.ftcdn.net/jpg/05/21/08/52/360_F_521085260_KFOmGr5X4mrqP3m7gtGo5uI9DLXHf76C.jpg" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ENT</h5>
                                <p className="mb-3 font-normal dark:text-white">Diagnosis, evaluation and treatment of diseases of the ear, nose and throat regions.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Cardiology */}
                <Link to='/cardiology'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://w7.pngwing.com/pngs/524/944/png-transparent-computer-icons-heart-cardiology-cardiovascular-disease-drawing-cardiology-miscellaneous-logo-apple-icon-image-format.png" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cardiology</h5>
                                <p className="mb-3 font-normal dark:text-white">Diagnosis, treatment of congenital heat defects, coronary artery disease, heart failure, and valvular heart disease.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Endocrinology */}
                <Link to='/endocrinology'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZoA__kTB1NRJkNAzfKhXWe96uflpltzMLAGIle4o7Q&s" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Endocrinology</h5>
                                <p className="mb-3 font-normal dark:text-white">Treatment of diseases related to problems with hormone.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Neurology */}
                <Link to='/neurology'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7xZkD7at54n_0ax_yy19VHd6SGx2u5AXhUBoYKgiyA&s" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Neurology</h5>
                                <p className="mb-3 font-normal dark:text-white">Diagnosis, treatment for disease involving the central and peripheral nervous systems.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* Dentistry */}
                <Link to='/dentistry'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://image.similarpng.com/very-thumbnail/2021/06/Dental-Logo-and-Icon-with-Modern-Design-Style-on-transparent-background-PNG.png" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dentistry</h5>
                                <p className="mb-3 font-normal dark:text-white">Diagnosis, management, and treatment of defects and injuries related to the teeth and gums.</p>
                            </div>
                        </a>
                    </div>
                </Link>
                {/* General Surgery */}
                <Link to='/general-Surgery'>
                    <div className="lg:mt-10">
                        <a className="flex flex-col items-center bg-white border border-primary rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-secondary dark:bg-primary lg:h-[194px] w-full  dark:hover:bg-secondary">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MNRiqUydxSw7KvJRv2o2KTDNHOLt8nqzYEvFUElypQ&s" alt="" />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">General Surgery</h5>
                                <p className="mb-3 font-normal dark:text-white">Focuses on abdominal contents including the esophagus,stomach, small intestine, large intestine, liver, pancreas, ga...</p>
                            </div>
                        </a>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Specialities;