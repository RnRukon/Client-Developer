import React from 'react';
import { useGetAllUserQuery } from '../../Redux/Features/User/UserApi';
import Navigation from '../../Components/Navigation/Navigation';
import DeveloperCard from '../../Components/DeveloperCard/DeveloperCard';
import Pagination from '../../Components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import Search from '../../Components/Search/Search';

const Developers = () => {
    const [search, setSearch] = React.useState("");

    const { data: developersData, isLoading } = useGetAllUserQuery({role:'user'});
    const developers = developersData?.result?.users;


   
    return (
        <div>
            <Navigation />

            <div className='container mx-auto py-10'>
                <div className='flex justify-center pb-5'>
                    <Search setSearch={setSearch} />
                </div>
                <div className='grid md:grid-cols-4 gap-5'>

                    {isLoading ? <h1>Loading...</h1> :
                        developers?.map(developer =>

                            <DeveloperCard key={developer?._id} user={developer} Link={Link} />

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

export default Developers;