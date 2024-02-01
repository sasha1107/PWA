import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-[48px] shrink-0 items-center bg-slate-500">
      <button
        className="pl-2"
        onClick={() => {
          navigate(-1);
        }}
      >
        <ArrowBackIosNewIcon className="text-slate-50" />
      </button>
      <h1 className="mr-[48px] flex-grow text-center text-slate-50">PWA App</h1>
    </div>
  );
};

export default Header;
