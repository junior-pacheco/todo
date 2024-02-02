import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  {
    path: 'create',
    name: 'Create'
  },
  {
    path: '/',
    name: 'List'
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-16 md:h-20 flex bg-slate-800">
      <div className="h-full w-1/4 md:w-1/5 flex items-center justify-center">
        <NavLink to={'/'} className={'font-bold text-xl md:text-2xl'}>
          Todo
        </NavLink>
      </div>
      <div className="h-full font-semibold w-3/4 md:w-4/5 flex items-center justify-center md:justify-center text-base md:text-2xl gap-4">
        {links.map((navlink) => (
          <NavLink
            key={navlink.path}
            to={navlink.path}
            className="text-white hover:text-teal-500 transition duration-300"
            activeClassName="text-teal-500"
          >
            {navlink.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
