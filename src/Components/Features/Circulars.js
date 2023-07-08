import React from 'react';
import CircularCard from '../CircularCard/CircularCard';
import { useGetAllCircularQuery } from '../../Redux/Features/Circular/CircularApi';
import { Link } from 'react-router-dom';

const Circulars = () => {
    const { data } = useGetAllCircularQuery();

    const approvedData = data?.result?.filter(data => data?.status === 'approved');


    return (
        <div>
            <h1 className='text-lg font-extrabold py-10'>Circulars</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 pb-14'>

                {approvedData?.slice(0, 8).map((data) =>
                    <CircularCard key={data?._id} data={data} />
                )}

            </div>
            <div className='pt-5 text-end underline'>
                <Link to='/circulars'
                    className=' text-blue-500'
                >More circulars</Link>
            </div>
        </div>
    );
};

export default Circulars;