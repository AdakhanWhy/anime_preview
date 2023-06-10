import React from 'react';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const ProductsPagination = ({ page, setPage, count }) => {

  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          display: {
            xs: 'block',
            sm: 'block',
            md: 'flex',
            lg: 'flex',
            xl: 'flex',
          },
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1%',
        }}
      >
        <Box
          sx={{
            width: {
              xs: '10%',
              sm: '10%',
              md: '0%',
              lg: '0%',
              xl: '0%',
            },
            height: '5vh',
            margin: {
              xs: '0%',
              sm: '3%',
              md: '0',
              lg: '0',
              xl: '0',
            },
          }}
        >
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            margin: {
              xs: '9%',
              sm: '10%',
              md: '0',
              lg: '0%',
              xl: '0',
            },
          }}
        >
            <Pagination
              page={page}
              onChange={handleChange}
              count={count}
            />
        </Box>
      </Box>
    </div>
  );
};

export default ProductsPagination;
