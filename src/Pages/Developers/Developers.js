import React, { useState } from 'react';
import { useGetAllUserQuery } from '../../Redux/Features/User/UserApi';
import Navigation from '../../Components/Navigation/Navigation';
import DeveloperCard from '../../Components/DeveloperCard/DeveloperCard';
import Pagination from '../../Components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import Search from '../../Components/Search/Search';

const Developers = () => {
    const [searchValue, setSearchValue] = useState('');

    const { data: developersData, isLoading } = useGetAllUserQuery({ role: 'user' });
    const developers = developersData?.result?.users;


    const filterData = developers?.filter(data =>
        data?.fname?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase()) ||
        data?.lname?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase()) ||
        data?.developerLaval?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase())


    );

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

            <div className='container mx-auto py-10'>
                <div className='flex justify-center '>
                    <Search setSearchValue={setSearchValue} />

                </div>
                <p className='text-xs text-blue-gray-500 text-center pb-5'>Search by first or last name or developer laval.</p>
                <div className='grid md:grid-cols-4 gap-5'>

                    {isLoading ? <h1>Loading...</h1> :
                        paginateItem?.map(developer =>

                            <DeveloperCard key={developer?._id} user={developer} Link={Link} />

                        )
                    }
                </div>
            </div>
            <div className='py-5 flex justify-center'>
                <Pagination
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    count={count}
                />
            </div>
        </div>
    );
};

export default Developers;