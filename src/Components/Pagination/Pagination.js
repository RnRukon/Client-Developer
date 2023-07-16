import React from 'react';

import Pagination from '@mui/material/Pagination';

const Paginate = ({ currentPage, setCurrentPage, count }) => {


  const handleChange = (event, value) => {

    setCurrentPage(value);
  }



  return (
    <Pagination
      onChange={handleChange}
      count={count}
      page={currentPage}
      showFirstButton
      showLastButton />
  );
};

export default Paginate;