
import React from 'react';
import { useDeleteJobCircularMutation, useGetMyJobCircularQuery } from '../../Redux/Features/Circular/CircularApi';
import CircularCard from '../../Components/CircularCard/CircularCard';


const OurCompanyJobCircular = () => {
    const { data } = useGetMyJobCircularQuery();

    const [deleteJobCircular] = useDeleteJobCircularMutation();

    const handleDelete = async (id) => {
        await deleteJobCircular({ id })
    }


    return (
        <div>
            OurCompanyJobCircular
            <br /><br /> <br />
            <div className='grid grid-cols-4 gap-4'>

                {data?.result.map((data) =>
                    <CircularCard key={data?._id} data={data} handleDelete={handleDelete} />
                )}

            </div>
        </div>
    );
};

export default OurCompanyJobCircular;