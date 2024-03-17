/* eslint-disable react/prop-types */

import CountUp from 'react-countup';
import '../../utility/PatientDetails.css'

const CountUpCard = ({ startNumber, endNumber, prefix }) => {
    const formatNumber = (number) => {
        return number + " " + '+'
    }
    return (
        <div data-aos="fade-down" className=" md:mt-12 bg-[#07092B]  p-4 rounded-lg shadow-md text-white text-center PatientDetails">
            <div className="text-4xl mb-2 font-bold ">
                <CountUp
                    start={startNumber}
                    end={endNumber}
                    duration={10}
                    separator=" "
                    onEnd={() => console.log('Ended! 👏')}
                    formattingFn={formatNumber}
                    onStart={() => console.log('Started! 💨')}
                />
            </div>
            <div>{prefix}</div>
        </div>
    );
};

const CountUpSection = () => {
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:mt-32 mt-10">
                <CountUpCard startNumber={1} endNumber={187} prefix="Total Country" />
                <CountUpCard startNumber={1} endNumber={294110} prefix="Confirmed Cases" />
                <CountUpCard startNumber={3} endNumber={12944} prefix="Deaths" />
                <CountUpCard startNumber={4} endNumber={100345} prefix="Recovered" />
            </section>
        </div>
    );
};

export default CountUpSection;