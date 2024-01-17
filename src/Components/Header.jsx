import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth0();

  const AuthenticatedLinks = () => (
    <>
      <li className="text-base uppercase cursor-pointer hidden md:block">
        <NavLink to="/dashboard" className="no-underline">
          Secrets
        </NavLink>
      </li>
      <li
        className="cursor-pointer text-white font-bold"
        onClick={() => logout()}
      >
        Log Out
      </li>
      <div className="ml-4 hidden md:block">
        <img
          src={user?.picture}
          alt=""
          className="rounded-full h-8 w-8 object-cover"
        />
      </div>
    </>
  );

  const UnauthenticatedLink = () => (
    <li className="text-base uppercase cursor-pointer">
      <NavLink to="/login" className="no-underline">
        Login
      </NavLink>
    </li>
  );

  return (
    <header className="bg-indigo-700">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center h-20">
        <div className="text-white mb-4 md:mb-0">Secret App</div>
        <div className="flex items-center">
          <ul className="flex space-x-4 text-white">
            <li className="text-base uppercase cursor-pointer">
              <NavLink to="/">Home</NavLink>
            </li>
            {isAuthenticated && <AuthenticatedLinks />}
            {!isAuthenticated && <UnauthenticatedLink />}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
