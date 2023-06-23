import React from 'react';
import {
    Card,
    Typography,

} from "@material-tailwind/react";
import contactData from '../../Data/contact-data';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
                <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
                <div className="max-w-8xl container relative mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-6 font-black"
                            >
                                Your story starts with us.
                            </Typography>
                            <Typography variant="lead" color="white" className="opacity-80">
                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi repellat hic modi cupiditate molestiae nisi totam in recusandae consequatur officia? Laudantium aspernatur laborum, esse culpa odit repellat reprehenderit deserunt harum!
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mx-auto  mb-48 -mt-24 grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
                {contactData.map(({ title, icon, description, color, style, path }) => (

                    <Card
                        key={title}
                        color="transparent"

                        className={`text-center text-blue-gray-900 bg-white px-6 py-4  ${style}`}
                    >
                      
                        <Link to={path}>
                            <div className={`mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full  shadow-lg text-white shadow-gray-500/20 ${color}`}>
                                {React.createElement(icon, {
                                    className: "w-5 h-5",
                                })}
                            </div>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {title}
                            </Typography>
                            <Typography className="font-normal text-blue-gray-500">
                                {description}
                            </Typography>
                        </Link>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Banner;