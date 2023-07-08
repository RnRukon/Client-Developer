import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
const About = () => {
    return (
        <div className=' h-screen overflow-y-auto bg-gray-100 pt-20'>
            <Navigation />
            <div className=" py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">
                        About Us
                    </h1>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                            <img
                                src="/img/how-to-become-web-developer-og.webp"
                                alt="Profile"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-bold mb-4">
                                Hi,
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Hi and welcome to developer. Searching for a new job, or finding a new employee can be tough and our goal is to make this process as simple as possible.
                            </p>
                            <h1 className='text-lg font-bold'>Looking for work?</h1>
                            <hr />

                            <p>We aim to give you every relevant job opportunity for your search at Jora so you don’t miss a thing.</p>
                            <br /><br />

                            <p>How do we do it? Jora is a search engine specifically for jobs. We use technology to pull current job ads from many sites in your location, as well as jobs posted directly to our site into one search result so it’s all there. Convenient!</p>
 <br />
                            <h1 className='text-lg font-bold'>Looking to hire?</h1>
                           
                            <p>Jora is a search engine for jobs, so if you find your job ad on our site, we have posted it here to help you reach more candidates. Aggregated job ads will link back to the original place of posting so you can manage your applications. Smart!</p>
                            <br /><br />

                            <p>While we launched Jora as a small Australian based start-up business, you will now find our site in 25 countries.</p>
                            <br />
                            <br />
                            <p>Simple to hire, simple to apply. Jora is proud to make job search easier all around the world.</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;