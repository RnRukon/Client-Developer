import React, { useState } from 'react';
import { useDeleteJobCircularMutation, useGetAllCircularQuery, useUpdateJobCircularMutation } from '../../Redux/Features/Circular/CircularApi';
import CircularCard from '../../Components/CircularCard/CircularCard';
import Pagination from '../../Components/Pagination/Pagination';


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


    // pagination --------------------
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const count = Math?.ceil(data?.result?.length / itemsPerPage);
    const paginateItem = data?.result?.slice(startIndex, endIndex);

    return (
        <div className='pt-28'>
            <h1>Circular({data?.result?.length ? data?.result?.length : "Not Found"})</h1>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

                {paginateItem?.map((data) =>
                    <CircularCard
                        key={data?._id}
                        data={data}
                        handleDelete={handleDelete}
                        handleApprove={handleApprove}
                    />
                )}

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

export default ManageCircular;