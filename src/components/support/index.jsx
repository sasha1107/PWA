import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
const Support = ({ support, target }) => {
  return (
    <div className="flex items-center  justify-between border bg-white p-2 px-4">
      <div>{target ? `${target} ` : ''}지원 여부</div>
      <div className={support ? 'text-green-500' : 'text-red-500'}>
        {support ? <CheckCircleIcon /> : <ErrorIcon />}
      </div>
    </div>
  );
};

export default Support;
