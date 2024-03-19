import AboutUs from "./AboutUs";
import ChooseUs from "./ChooseUs";
import Doctors from "./Doctors";
import FAQ from "./FAQ";
import Header from "./Header";
import OurService from "./OurService";
import PatientDetail from "./PatientDetail";
import PricingPlan from "./PricingPlan";
import Solutions from "./Solutions";
import Testimonial from "./Testimonial";


const Home = () => {
    return (
        <div className="font-Poppins">
            <Header></Header>
            <AboutUs></AboutUs>
            <PatientDetail></PatientDetail>
            <OurService></OurService>
            <div className="bg-black">
                <Doctors></Doctors>
                <FAQ></FAQ>
            </div>
            <Solutions></Solutions>
            <ChooseUs></ChooseUs>
            <Testimonial></Testimonial>
            <PricingPlan></PricingPlan>
        </div>
    );
};

export default Home;