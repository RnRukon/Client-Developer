import React, { useState } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Search from '../../Components/Search/Search';
import Pagination from '../../Components/Pagination/Pagination';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import { Link } from 'react-router-dom';
import { useGetAllUserQuery } from '../../Redux/Features/User/UserApi';

const Companies = () => {

    const [searchValue, setSearchValue] = React.useState("");

    const { data: companiesData, isLoading } = useGetAllUserQuery({ role: 'company' });
    const companies = companiesData?.result?.users;


    const filterData = companies?.filter(data =>
        data?.companyName?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase()) ||
        data?.companyType?.toLocaleLowerCase()?.includes(searchValue?.toLocaleLowerCase())
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
                <div className='flex justify-center pb-5'>
                    <Search setSearchValue={setSearchValue} />
                </div>
                <div className='grid md:grid-cols-4 gap-5'>

                    {isLoading ? <h1>Loading...</h1> :
                        paginateItem?.map(company =>

                            <CompanyCard key={company?._id} company={company} Link={Link} />

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

export default Companies;