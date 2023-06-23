import { Button, Card, CardBody, CardFooter, Tooltip } from '@material-tailwind/react';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FaGithubAlt } from 'react-icons/fa';

const CompanyCard = ({ Link, company }) => {

    return (
        <Card className=' flex flex-col '>
            <CardBody>
                {
                    Link ? <Link to={`/details/${company?._id}`}>
                        <img
                            className="h-60 w-60 rounded-full mx-auto"
                            src='/img/team-4.png'
                            alt="Profile"
                        />

                        <h1 className=' text-black text-center text-2xl font-bold' >
                            {company?.companyName}
                        </h1>
                        <h6 className=' text-center text-sm font-bold' >
                            ({company?.companyType})
                        </h6>
                        <h6 className=' text-center text-xs font-bold' >
                            {company?.companyAddress}
                        </h6>

                    </Link> :

                        <div>
                            <img
                                className="h-60 w-60 rounded-full mx-auto"
                                src='/img/team-4.png'
                                alt="Profile"
                            />
                            <h1 className=' text-black text-center text-2xl font-bold' >
                                {company?.companyName}
                            </h1>
                            <h6 className=' text-center text-sm font-bold' >
                                ({company?.companyType})
                            </h6>
                            <h6 className=' text-center text-xs font-bold' >
                                {company?.companyAddress}
                            </h6>

                        </div>
                }


            </CardBody>


            <CardFooter>
                <div className='flex justify-center gap-3 relative'>
                    <Tooltip content="Web Side" placement="top">
                        <a href={company?.companyWebSide} target="_blank" rel="noopener noreferrer">
                            <Button variant='outlined' size='sm'>
                                <CgWebsite size={20} />
                            </Button>
                        </a>
                    </Tooltip>

                    <Tooltip content="Github" placement="top">
                        <a href={company?.github} target="_blank" rel="noopener noreferrer">
                            <Button variant='outlined' size='sm'>
                                <FaGithubAlt size={20} />
                            </Button>
                        </a>
                    </Tooltip>
                    <Tooltip content="Linkedin" placement="top">
                        <a href={company?.linkedin} target="_blank" rel="noopener noreferrer">
                            <Button variant='outlined' size='sm'>
                                <BsLinkedin size={20} />
                            </Button>
                        </a>
                    </Tooltip>


                </div>
            </CardFooter>
        </Card>
    );
};

export default CompanyCard;