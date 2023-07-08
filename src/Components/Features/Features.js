import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Developers from './Developers';
import Companies from './Companies';
import Circulars from './Circulars';



const Features = () => {
    return (
        <div className='container mx-auto px-3'>
            <Card className="grid md:grid-cols-2 ">
                <CardHeader shadow={false} floated={false} className=" shrink-0 m-0 rounded-r-none">
                    <img src="/img/how-to-become-web-developer-og.webp"
                        alt="img"
                        className=" w-full" />
                </CardHeader>

                <CardBody>
                    <Typography variant="h6" color="blue" className="uppercase mb-4">startups</Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Lyft launching cross-platform service this week
                    </Typography>
                    <Typography color="gray" className="font-normal mb-8">
                        Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
                    </Typography>
                {/* 
                        <Button variant="text" className="flex items-center gap-2">
                            Learn More
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button> */}
             
                </CardBody>
            </Card>
            <br />
            
            <hr />
            <Developers />
            <br />
            <hr />
            <Companies />
            <br />
            <hr />
            <Circulars/>
            <br />
            <hr />
        </div>
    );
};

export default Features;