import React from 'react';

import Pagination from '@mui/material/Pagination';

const Paginate = ({
  page,
  setCurrentPage,
  count
}) => {


  const handleChange = (event, value) => {
    setCurrentPage(value);
  }



  return (
    <Pagination
      onChange={handleChange}
      count={count}
      page={page}
      showFirstButton
      showLastButton />
  );
};

export default Paginate;