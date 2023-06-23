import React from 'react';
import { useGetAllUserQuery } from '../../Redux/Features/User/UserApi';
import DeveloperCard from '../DeveloperCard/DeveloperCard';
import { Link } from 'react-router-dom';

const Developers = () => {


    const { data: developersData, isLoading } = useGetAllUserQuery({ role: 'user' });
    const developers = developersData?.result?.users?.slice(0, 7);



    return (
        <div >
            <h1 className='text-lg font-extrabold py-10'>Developers</h1>
            <div className='grid md:grid-cols-4 gap-5'>

                {isLoading ? <h1>Loading...</h1> :
                    developers?.map(developer =>

                        <DeveloperCard key={developer?._id} user={developer} Link={Link} />

                    )
                }
            </div>

            <div className='pt-5 text-end underline'>
                <Link to='/developers'
                    className=' text-blue-500'
                >More developers</Link>
            </div>
        </div>
    );
};

export default Developers;