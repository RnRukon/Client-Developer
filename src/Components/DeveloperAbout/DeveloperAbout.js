import { Card, CardBody, CardFooter, IconButton } from '@material-tailwind/react';
import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';

const DeveloperAbout = ({ user, handleCreateChatting }) => {
    return (
        <Card className='col-span-12 md:col-span-8 relative'>



            <CardBody>
                <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">First Name</div>
                            <div className="px-4 py-2">{user?.fname}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Last Name</div>
                            <div className="px-4 py-2">{user?.lname}</div>
                        </div>

                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Gender</div>
                            <div className="px-4 py-2">{user?.gender}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                            <div className="px-4 py-2">{user?.contactNo}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Current Address</div>
                            <div className="px-4 py-2">{user?.currentAddress}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Permanent Address</div>
                            <div className="px-4 py-2">{user?.permanentAddress}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email.</div>
                            <div className="px-4 py-2">
                                <a className="text-blue-800" href={`mailto:${user?.email}`}>{user?.email}</a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Birthday</div>
                            <div className="px-4 py-2">{user?.dateOfBirth}</div>
                        </div>

                    </div>
                </div>
            </CardBody>
            {/* Education and Experience */}


            <CardFooter>
                <div className="bg-white p-3 ">

                    <div className="grid grid-cols-2">
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Experience</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">{user?.experienceCompany}</div>
                                    <div className="text-gray-500 text-xs">{user?.experiencePosition}</div>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">Education</span>
                            </div>
                            <ul className="list-inside space-y-2">
                                <li>
                                    <div className="text-teal-600">{user?.institute}</div>
                                    <div className="text-gray-500 text-xs">{user?.qualification}</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {/* <!-- End of Experience and education grid --> */}
                </div>
            </CardFooter>

            <div className=' absolute right-1 bottom-1'>
                <IconButton variant='text' className=' rounded-full z-50 right-0 bottom-0' onClick={handleCreateChatting}><FaFacebookMessenger size={35} /></IconButton>
            </div>
        </Card>
    );
};

export default DeveloperAbout;