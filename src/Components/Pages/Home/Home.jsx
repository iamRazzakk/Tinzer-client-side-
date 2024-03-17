import AboutUs from "./AboutUs";
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
        </div>
    );
};

export default Home;