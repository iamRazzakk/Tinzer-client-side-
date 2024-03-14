import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Pages/Home/Home";

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
                }
            ]
        }
    ]
)
export default myCreateRouter;