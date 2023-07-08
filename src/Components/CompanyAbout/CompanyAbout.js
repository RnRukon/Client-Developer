import { Card, CardBody, IconButton } from '@material-tailwind/react';
import React from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const CompanyAbout = ({ company, handleCreateChatting }) => {
    const { user } = useSelector(state => state.auth);
    return (
        <Card className='col-span-12 md:col-span-8'>
            <CardBody>
                <div className="text-gray-700">
                    <div className="grid md:grid-cols-2 text-sm">
                        {user?.role === "admin" && <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">First Name</div>
                            <div className="px-4 py-2">{company?.fname}</div>
                        </div>}
                        {user?.role === "admin" && <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Last Name</div>
                            <div className="px-4 py-2">{company?.lname}</div>
                        </div>}
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Address</div>
                            <div className="px-4 py-2">{company?.companyAddress}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Contact No.</div>
                            <div className="px-4 py-2 font-bold">{company?.contactNo}</div>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Email.</div>
                            <div className="px-4 py-2">
                                <a className="text-blue-800 font-bold" href={`mailto:${company?.email}`}>{company?.email}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <br />

                <div>
                    <h1 className='font-bold'>Description:</h1>
                    <article className='text-justify'>
                        {company?.companyDescription}
                    </article>
                </div>
            </CardBody>
            <div className=' absolute right-1 bottom-1'>
                <IconButton variant='text' className=' rounded-full z-50 right-0 bottom-0' onClick={handleCreateChatting}><FaFacebookMessenger size={35} /></IconButton>
            </div>
        </Card>
    );
};

export default CompanyAbout;