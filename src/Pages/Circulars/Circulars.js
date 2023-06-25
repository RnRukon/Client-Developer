import React, { useState } from 'react';
import { useGetAllCircularQuery } from '../../Redux/Features/Circular/CircularApi'
import { Button,  List, ListItem } from '@material-tailwind/react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/footer';
import Search from '../../Components/Search/Search';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
const Circulars = () => {

    const { data, isLoading } = useGetAllCircularQuery();
    const [back, setBack] = useState(false);
 


    return (
        <div className=''>
            <Navigation />
            <div className='flex justify-center  pt-10'>
                <Search />
            </div>
            <div className='container mx-auto md:flex flex-grow gap-6'>
                <Button size='sm' className={`${back ? "hidden" : "block md:hidden"} `} variant='text' onClick={() => setBack(true)}>
                    <MdOutlineKeyboardBackspace size={24} />
                </Button>
                <div className={`md:h-screen overflow-y-auto md:block ${!back ? "hidden" : "block"}`}>
                    {isLoading ?
                        <div className='flex justify-center items-center h-screen'>
                            <h1>Loading...</h1>
                        </div> :

                        <List>
                            {
                                data?.result?.filter(data=>data?.status==='approved')?.map(data =>
                                    <ListItem onClick={() => setBack(false)} key={data?._id} className='border'>

                                        <Link to={`/circulars/circularDetails/${data?._id}`} >

                                            <div className='flex gap-5 items-center'>
                                                <div>
                                                    <img src="/img/team-4.png" alt=""
                                                        className='h-24 rounded-full'
                                                    />
                                                </div>
                                                <div>
                                                    <h1 className='text-base font-bold'>{data.jobTitle} ({data?.jobType})</h1>
                                                    <h1 className='text-base font-bold'>{data.company.companyName}</h1>
                                                    <p className='text-sm'>{data?.company?.companyAddress},({data?.jobLocation})</p>
                                                </div>
                                            </div>

                                        </Link>

                                    </ListItem>
                                )
                            }

                        </List>


                    }
                </div>

                <div className={`md:h-screen overflow-y-auto px-5 md:block  ${back ? "hidden" : "block"}`}>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Circulars;