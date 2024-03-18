import AboutUs from "./AboutUs";
import ChooseUs from "./ChooseUs";
import Doctors from "./Doctors";
import FAQ from "./FAQ";
import Header from "./Header";
import OurService from "./OurService";
import PatientDetail from "./PatientDetail";
import Solutions from "./Solutions";


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
        </div>
    );
};

export default Home;