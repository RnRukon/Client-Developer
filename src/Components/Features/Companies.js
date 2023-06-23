import React from 'react';
import { useGetAllUserQuery } from '../../Redux/Features/User/UserApi';
import CompanyCard from '../CompanyCard/CompanyCard';
import { Link } from 'react-router-dom';

const Companies = () => {

    const { data: companiesData, isLoading } = useGetAllUserQuery({ role: 'company' });
    const companies = companiesData?.result?.users.slice(0, 7);


    return (
        <div className=' py-16'>
            <h1 className='text-lg font-extrabold py-10'>Software  Companies</h1>
            <div className='grid md:grid-cols-4 gap-5'>

                {isLoading ? <h1>Loading...</h1> :
                    companies?.map(company =>

                        <CompanyCard key={company?._id} company={company} Link={Link} />

                    )
                }
            </div>
            <div className='pt-5 text-end underline'>
                <Link to='/companies'
                    className=' text-blue-500'
                >More companies</Link>
            </div>
        </div>
    );
};

export default Companies;