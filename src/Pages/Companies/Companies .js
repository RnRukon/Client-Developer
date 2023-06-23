import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Search from '../../Components/Search/Search';
import Pagination from '../../Components/Pagination/Pagination';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import { Link } from 'react-router-dom';
import { useGetAllUserQuery } from '../../Redux/Features/User/UserApi';

const Companies = () => {

    const [search, setSearch] = React.useState("");

    const { data: companiesData, isLoading } = useGetAllUserQuery({ role: 'company' });
    const companies = companiesData?.result?.users;
    return (
        <div>
            <Navigation />

            <div className='container mx-auto py-10'>
                <div className='flex justify-center pb-5'>
                    <Search setSearch={setSearch} />
                </div>
                <div className='grid md:grid-cols-4 gap-5'>

                    {isLoading ? <h1>Loading...</h1> :
                        companies?.map(company =>

                            <CompanyCard key={company?._id} company={company} Link={Link} />

                        )
                    }
                </div>
            </div>
            <div className=' text-center py-5'>
                <Pagination />
            </div>
        </div>
    );
};

export default Companies;