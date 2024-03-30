
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Pages/Home/Home";
import SingUpForm from './../Auth/SingUpForm';
import SingInForm from "../Auth/SinginForm";
import PricingPlan from "../Pages/Home/PricingPlan";
import Specialities from "../Specialities";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";
import AllUsers from "../Dashboard/AllUsers";
import AppointMent from "../AppointMent";
import Physician from "../SpecialitiesDoctors/Physician";
import GynaeAndObs from "../SpecialitiesDoctors/GynaeAndObs";
import Dermatology from "../SpecialitiesDoctors/Dermatology";
import InternalMedicine from "../SpecialitiesDoctors/InternalMedicine";
import Gastroenterology from "../SpecialitiesDoctors/Gastroenterology";
import Psychiatry from "../SpecialitiesDoctors/Psychiatry";
import DoctorBooking from "../DoctorBooking/DoctorBooking";

const myCreateRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout></Layout>,
            errorElement: <div className="text-xl text-center">Error</div>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/sing-up',
                    element: <SingUpForm></SingUpForm>
                },
                {
                    path: '/sing-in',
                    element: <SingInForm></SingInForm>
                },
                {
                    path: '/subscription-plans',
                    element: <PricingPlan></PricingPlan>
                },
                {
                    path: '/specialities',
                    element: <Specialities></Specialities>
                },
                {
                    path: '/booking',
                    element: <AppointMent></AppointMent>
                },
                {
                    path: 'physician',
                    element: <Physician></Physician>
                },
                {
                    path: '/gynae-and-obs',
                    element: <GynaeAndObs></GynaeAndObs>
                },
                {
                    path: '/dermatology',
                    element: <Dermatology></Dermatology>
                },
                {
                    path: '/internal-medicine',
                    element: <InternalMedicine></InternalMedicine>
                },
                {
                    path: '/gastroenterology',
                    element: <Gastroenterology></Gastroenterology>
                },
                {
                    path: '/psychiatry',
                    element: <Psychiatry></Psychiatry>
                },
                {
                    path: '/psychology',
                    element: <Physician></Physician>
                },
                {
                    path: '/book-now',
                    element: <DoctorBooking></DoctorBooking>
                },
                {
                    path: '/dashboard',
                    element: <Dashboard></Dashboard>,
                    children: [
                        {
                            path: 'profile',
                            element: <Profile></Profile>
                        },
                        {
                            path: 'users',
                            element: <AllUsers></AllUsers>
                        }

                    ]
                },

            ]
        },

    ]
)
export default myCreateRouter;