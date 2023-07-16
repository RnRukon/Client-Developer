
import React, { useState } from 'react';
import { useDeleteJobCircularMutation, useGetMyJobCircularQuery } from '../../Redux/Features/Circular/CircularApi';
import CircularCard from '../../Components/CircularCard/CircularCard';
import Pagination from '../../Components/Pagination/Pagination';

const OurCompanyJobCircular = () => {
    const { data } = useGetMyJobCircularQuery();

    const [deleteJobCircular] = useDeleteJobCircularMutation();

    const handleDelete = async (id) => {
        await deleteJobCircular({ id })
    }

    // pagination --------------------
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const count = Math?.ceil(data?.result?.length / itemsPerPage);
    const paginateItem = data?.result?.slice(startIndex, endIndex);
    return (
        <div>
            <br /><br /> <br />
            <h1>Company({data?.result?.length ? data?.result?.length : "Not Found"})</h1>
            <div className='grid grid-cols-4 gap-4'>

                {paginateItem?.map((data) =>
                    <CircularCard
                        key={data?._id}
                        data={data}
                        handleDelete={handleDelete}
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

export default OurCompanyJobCircular;