import React from 'react';
import { useDeleteJobCircularMutation, useGetAllCircularQuery, useUpdateJobCircularMutation } from '../../Redux/Features/Circular/CircularApi';
import CircularCard from '../../Components/CircularCard/CircularCard';

const ManageCircular = () => {
    const { data } = useGetAllCircularQuery();
    const [updateCircular] = useUpdateJobCircularMutation();
    const [deleteJobCircular] = useDeleteJobCircularMutation();



    const handleDelete = async (id) => {
        await deleteJobCircular({ id })
    }

    const handleApprove = (id) => {
        const data = { status: 'approved' };
        updateCircular({ data, id })
    }


    return (
        <div className='pt-28'>
            ManageCircular

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                {data?.result.map((data) =>
                    <CircularCard key={data?._id} data={data} handleDelete={handleDelete} handleApprove={handleApprove} />
                )}

            </div>
        </div>
    );
};

export default ManageCircular;