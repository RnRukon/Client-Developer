import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {  useGetSingleJobCircularQuery } from '../../Redux/Features/Circular/CircularApi';
import { Button } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import DialogXXL from '../../Components/Dialog/DialogXXL';


const CircularDetails = () => {

    const { id } = useParams();
    const { user } = useSelector(state => state.auth);

    const { data } = useGetSingleJobCircularQuery({ id }, { refetchOnWindowFocus: true });
    const circular = data?.result;


    const existCandidates = data?.result?.candidates?.find(data => data?.email === user?.email);



    return (
        <div className='container mx-auto pt-16'>
            <div className='max-w-4xl mx-auto py-10'>
                <div className='md:flex justify-between'>
                    <div>
                        <h1 className='font-extrabold'>{circular?.jobTitle}</h1>


                        <span className='text-sm font-bold'>
                            {circular?.company?.companyAddress}

                            <span>({circular?.jobLocation})</span>
                            <br className='md:hidden block' />
                            {user?.role === 'company' ? <Link to={`/dashboard/candidates/${id}`}>
                                <span className='text-green-500 md:pl-3 '>{circular?.candidates?.length} applicants</span>
                            </Link> :
                                <span className='text-green-500 md:pl-3'>{circular?.candidates?.length} applicants</span>
                            }


                        </span>
                        <p className='text-sm'>{circular?.jobType}</p>
                    </div>
                    {user.role === "user" && <div className='mt-5'>


                        {existCandidates ?
                            <Button
                                variant='gradient'
                                disabled
                            > Applied</Button> : <DialogXXL />}

                    </div>}
                </div>
                <br />
                <h1 className='font-bold'>About the job</h1>
                <h6 className='font-bold text-md'>About Us:</h6>
                <br />
                <h1 className='text-lg font-bold '>Description:</h1>
                <p className='text-sm text-justify'>{circular?.description}</p>
                <br /><br />
                <h1 className='text-lg font-bold  text-justify'>Responsibilities:</h1>
                <p className='text-sm text-justify'> {circular?.responsibilities}</p>
                <br /><br />
                <h1 className='text-lg font-bold  text-justify'>Skills:</h1>
                <p className='text-sm'>Skills: {circular?.skills}</p>

                <br /><br />
                <p className='text-sm'>Salary Range: {circular?.salaryRange}$</p>

                <p className='text-sm'>Send your CV or Resume with this email : <a className='text-indigo-500 font-bold' href={`mailto:${circular?.email}`}>{circular?.email}</a></p>



                <div className='mt-10 border p-5'>
                    <h1 className='font-bold'>About the company</h1>

                    <br />
                    <Link to={`/details/${circular?.company?._id}`}>

                        <div className='flex items-center  gap-3'>
                            <img src="/img/team-4.png" alt=""
                                className='w-14 h-14  rounded-full'
                            />
                            <div>
                                <h1>{circular?.company?.companyName}</h1>
                                <h4 className='font-bold text-sm'>{circular?.company?.companyType}</h4>
                                <p className='text-sm font-bold'>{circular?.company?.companyAddress}</p>

                            </div>
                        </div>

                    </Link>


                    <br />
                    <p className='text-sm text-justify'>{circular?.company?.companyDescription}</p>





                </div>



            </div>

            <br /><br />
        </div>
    );
};

export default CircularDetails;