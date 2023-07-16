import React, { useState } from 'react';
import { useGetAllCircularQuery } from '../../Redux/Features/Circular/CircularApi'
import { Button, List, ListItem } from '@material-tailwind/react';
import { Link, Outlet } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/footer';
import Search from '../../Components/Search/Search';
import Pagination from '../../Components/Pagination/Pagination';
import { MdOutlineKeyboardBackspace } from 'react-icons/md'

const Circulars = () => {
    const [back, setBack] = useState(false);
    const [searchValue, setSearchValue] = useState('');


    const { data, isLoading } = useGetAllCircularQuery();
    const approvedData = data?.result?.filter(data => data?.status === 'approved');



    const filterData = approvedData?.filter(data =>
        data?.jobTitle?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase()) ||
        data?.jobLocation?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase()) ||
        data?.jobType?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase()) ||
        data?.company?.companyName?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase())


    )
    // pagination --------------------
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const count = Math?.ceil(filterData?.length / itemsPerPage);
    const paginateItem = filterData?.slice(startIndex, endIndex);

    return (
        <div className='pt-20'>
            <Navigation />
            <div className='flex justify-center  pt-10'>
                <Search setSearchValue={setSearchValue} />
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
                                paginateItem?.map(data =>
                                    <ListItem onClick={() => setBack(false)} key={data?._id} className='border'>

                                        <Link to={`/circulars/circularDetails/${data?._id}`} >

                                            <div className='flex gap-5 items-center'>
                                                <div>
                                                    <img
                                                        src={data?.company?.photo || '/img/user.avif'}
                                                        alt=""
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
                    <div className='py-5 flex justify-center'>
                        <Pagination
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            count={count}
                        />
                    </div>
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