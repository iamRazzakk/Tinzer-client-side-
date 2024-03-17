import AboutUs from "./AboutUs";
import Doctors from "./Doctors";
import FAQ from "./FAQ";
import Header from "./Header";
import OurService from "./OurService";
import PatientDetail from "./PatientDetail";


const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <AboutUs></AboutUs>
            <PatientDetail></PatientDetail>
            <OurService></OurService>
            <Doctors></Doctors>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;