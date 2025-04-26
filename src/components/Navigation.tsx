
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto pt-6 px-6 md:px-8">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-orbitron font-bold text-2xl text-white">ResuMate</Link>
        <div className="flex gap-4">
          <Link 
            to="/applicant" 
            className="px-4 py-1.5 rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all text-sm"
          >
            For Applicants
          </Link>
          <Link 
            to="/hr" 
            className="px-4 py-1.5 rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all text-sm"
          >
            For HR
          </Link>
          <button className="px-4 py-1.5 rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all text-sm">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
