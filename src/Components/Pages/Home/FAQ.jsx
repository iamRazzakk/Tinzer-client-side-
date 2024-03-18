import { useState } from 'react';
import image1 from '../../../assets/Picture/AboutImg/about-img-1.jpg';
import { MdOutlineClose } from "react-icons/md";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <div className="lg:mt-32 md:flex gap-4 bg-black">
            <div className="flex-1 lg:p-10">
                <img className='w-full h-full object-cover rounded-xl' src={image1} alt="" />
            </div>
            <div className="flex-1 h-full w-full space-y-3 lg:p-16 text-white">
                {[{ question: "Which Material Types Can you Work With?", answer: "We work with a wide range of materials, including textiles, plastics, metals, and more to meet your telemedicine needs." },
                { question: "What Access Do I Have On The Free Plan?", answer: "On the free plan, you'll have access to essential features such as video consultations, appointment scheduling, and basic patient management tools." },
                { question: "Can I Have Multiple Activities In A Single Feature?", answer: "Yes, our platform allows you to combine multiple activities within a single feature, streamlining your workflow and enhancing efficiency." },
                { question: "Why Choose Our Services In Your Business?", answer: "Choosing our services brings expertise, reliability, and innovation to your business, ensuring seamless integration and unparalleled support for your telemedicine needs." }].map((faq, index) => (
                    <div key={index} className="collapse collapse-arrow border border-white">
                        <input type="radio" name="my-accordion-2" checked={openIndex === index} onChange={() => handleToggle(index)} />
                        <div className="collapse-title text-xl font-medium">
                            {faq.question}
                        </div>
                        <div className={`collapse-content ${openIndex === index ? 'block' : 'hidden'}`}>
                            <p>{faq.answer}</p>
                            <button className="text-secondary font-bold text-2xl" onClick={() => setOpenIndex(null)}><MdOutlineClose className=''></MdOutlineClose></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
