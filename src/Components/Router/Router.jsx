import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Pages/Home/Home";
import SingUpForm from './../Auth/SingUpForm';
import SingInForm from "../Auth/SinginForm";

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
                }
            ]
        }
    ]
)
export default myCreateRouter;