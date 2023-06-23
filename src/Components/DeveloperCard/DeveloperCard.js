import { Button, Card, CardBody, CardFooter, Tooltip } from '@material-tailwind/react';
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { CgNotes, CgWebsite } from 'react-icons/cg';
import { FaGithubAlt } from 'react-icons/fa';

const DeveloperCard = ({ user, Link }) => {
    return (
        <Card className='flex flex-col justify-between'>
            <CardBody>
                {
                    Link ? <Link to={`/details/${user?._id}`}>
                        <img
                            className="h-60 w-60 rounded-full mx-auto"
                            src='/img/team-4.png'
                            alt="Profile"
                        />

                        <h1 className=' text-black text-center text-2xl font-bold' >
                            {user?.fname} {user?.lname}
                        </h1>
                        <h6 className=' text-center text-xs font-bold' >
                            ( {user?.developerLaval}) {user?.positionType}
                        </h6>



                        <h1 className=' text-justify pt-3 text-xs' >
                            {user?.bio}
                        </h1>
                    </Link> :

                        <div>
                            <img
                                className="h-60 w-60 rounded-full mx-auto"
                                src='/img/team-4.png'
                                alt="Profile"
                            />

                            <h1 className=' text-black text-center text-2xl font-bold' >
                                {user?.fname} {user?.lname}
                            </h1>
                            <h6 className=' text-center text-xs font-bold' >
                                ( {user?.developerLaval}) {user?.positionType}
                            </h6>



                            <h1 className=' text-justify pt-3 text-xs' >
                                {user?.bio}
                            </h1>
                        </div>
                }


            </CardBody>



            <CardFooter>
                <div className='flex justify-center gap-3 relative'>

                    <Tooltip content="Resume or CV" placement="top">
                        <a href={user?.resume} target="_blank" rel="noopener noreferrer">
                            <Button variant='outlined' size='sm'>
                                <CgNotes size={20} />
                            </Button>
                        </a>
                    </Tooltip>

                    <Tooltip content="Portfolio" placement="top">
                        <a href={user?.portfolio} target="_blank" rel="noopener noreferrer">
                            <Button variant='outlined' size='sm'>
                                <CgWebsite size={20} />
                            </Button>
                        </a>
                    </Tooltip>

                    <Tooltip content="Github" placement="top">
                        <a href={user?.github} target="_blank" rel="noopener noreferrer">
                            <Button variant='outlined' size='sm'>
                                <FaGithubAlt size={20} />
                            </Button>
                        </a>
                    </Tooltip>
                    <Tooltip content="Linkedin" placement="top">
                        <a href={user?.linkedin} target="_blank" rel="noopener noreferrer">
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

export default DeveloperCard;