import image from '../../../assets/Picture/image4 (1).jpg'

const AboutUs = () => {
    return (
        <div className="md:flex bg-black  justify-center gap-4">
            <div className='flex-1'>
                <img src={image} alt="" />
            </div>
            <div className='flex-1 space-y-4 text-white'>
                <h1>About Us</h1>
                <h1 className='text-4xl font-bold'>About Coronavirus Disease</h1>
                <p>stay home & safe for you and others, and maintain all the safety measures by medical professionals to defeat it!</p>
                <p>know the symptoms of the coronavirus(covid-19) and inform others, follow the safety steps instructed by world health organization (WHO).</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut nisi ut aliquip ex ea commodo consequat.</p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;