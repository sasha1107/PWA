import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-12 items-center justify-between bg-red-100">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBackIosNewIcon />
      </button>
      <h1>logo</h1>
      <div>a</div>
    </div>
  );
};

export default Header;
