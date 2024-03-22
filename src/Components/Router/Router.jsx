
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Pages/Home/Home";
import SingUpForm from './../Auth/SingUpForm';
import SingInForm from "../Auth/SinginForm";
import PricingPlan from "../Pages/Home/PricingPlan";
import Specialities from "../Specialities";

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
                }
            ]
        }
    ]
)
export default myCreateRouter;