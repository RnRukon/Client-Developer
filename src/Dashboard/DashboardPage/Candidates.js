import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetSingleJobCircularQuery } from '../../Redux/Features/Circular/CircularApi';
import DeveloperCard from '../../Components/DeveloperCard/DeveloperCard';

const Candidates = () => {

    const { id } = useParams();

    const { data } = useGetSingleJobCircularQuery({ id });
    const circular = data?.result?.candidates;

    return (
        <div className='py-10'>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    circular?.map((data) =>
                        <DeveloperCard key={data?._id} Link={Link} user={data} />
                    )
                }
            </div>
        </div>
    );
};

export default Candidates;