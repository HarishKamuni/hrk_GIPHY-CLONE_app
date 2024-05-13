import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import { CgMenuRight } from 'react-icons/cg';

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  return (
    <nav>
      <div className="relative flex justify-between items-center mb-2 gap-4">
        <Link to={'/'} className="flex gap-2">
          <img src="/logo.svg" className="w-8" alt="logo" />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>
        {/* render categories */}
        <div className="font-bold flex items-center gap-2 text-md">
          <Link className="px-4 py-1 hover:gradient border-b-4 hidden lg:block">
            Reactions
          </Link>
          <button onClick={() => setShowCategories(!showCategories)}>
            <HiOutlineEllipsisVertical
              size={35}
              className={`py-0.5 hover:gradient ${
                showCategories ? 'gradient' : ''
              } border-b-4 hidden lg:block`}
            />
          </button>
          <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
            <Link to={'favorate'}>Favorite GIFs</Link>
          </div>
          <button>
            <CgMenuRight size={30} className={`text-sky-400 block lg:hidden`} />
          </button>
        </div>
        {showCategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span>Category</span>
            <hr />
            <div>
              <Link className="font-bold">Reactions</Link>
            </div>
          </div>
        )}
      </div>
      {/* search */}
    </nav>
  );
};

export default Header;
