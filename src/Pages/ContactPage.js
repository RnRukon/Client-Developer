import React, { Suspense } from 'react';
import Footer from '../Components/Footer/footer';
import Navigation from '../Components/Navigation/Navigation';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div>
            <div>
                <Navigation />
                <div className="">
                    <div className=' md:grid grid-cols-12 py-20'>
                        <div className=' col-span-5 flex flex-col justify-center items-center'>
                            <img src="/img/Contact us.gif" alt="" />
                        </div>
                        <div className='col-span-7   px-3'>
                            <div>
                                <h1 className="text-4xl font-bold text-slate-800 text-center py-3 ">Contact Us</h1>
                            </div>
                            <div className='bg-white rounded-lg shadow-lg p-8 '>
                                <h5 className=' text-center py-3 bg-slate-400 mb-5 text-white  text-xl font-bold font-serif'>Child Street</h5>
                                <div className=" flex flex-col md:flex-row items-center justify-center">
                                    <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                                        <a href="tel:+8001765459224" className='text-center'>
                                            <div className="text-blue-500 text-4xl mb-4 flex justify-center">
                                                <FaPhoneAlt />
                                            </div>
                                            <div className="text-gray-800 font-bold text-lg mb-2">Call Us</div>
                                            <div className="text-gray-600 text-sm">+8001765459224</div>
                                        </a>
                                    </div>
                                    <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0  text-center">
                                        <a href="mailto:developer.com" className=' '>
                                            <div className="text-blue-500 text-4xl mb-4 flex justify-center">
                                                <FaEnvelope />
                                            </div>
                                            <div className="text-gray-800 font-bold text-lg mb-2">Email Us</div>
                                            <div className="text-gray-600 text-sm">developer.com</div>
                                        </a>
                                    </div>
                                    <div className="md:w-1/3 flex flex-col items-center mb-4 md:mb-0">
                                        <a href="https://www.google.com/maps/dir//Sunamganj/@25.0666548,91.4072392,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3750daf49ba21823:0x3180c8d4ddeb5b9b!2m2!1d91.4072392!2d25.0666548" target="_blank" rel="noopener noreferrer"
                                            className=' text-center'
                                        >
                                            <div className="text-blue-500 text-4xl mb-4 flex justify-center">

                                                <FaMapMarkerAlt />
                                            </div>
                                            <div className="text-gray-800 font-bold text-lg mb-2">Visit Us</div>
                                            <div className="text-gray-600 text-sm">Dhaka, Bangladesh</div>

                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='container  h-96 mt-28 '>
                                <Suspense fallback={<h1>Loading...</h1>}>
                                <iframe className=' w-full h-full'
            title='map'
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=dhaka&t=&z=10&ie=UTF8&iwloc=&output=embed`}
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0">
        </iframe>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ContactPage;