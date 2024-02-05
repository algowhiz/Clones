import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthorContext';

const Nav_bar = () => {

  const { user, logout } = useAuth()
  console.log(user);
  const nav = useNavigate();

  const Handel_logout = async () => {
    try {
      await logout();
      nav('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='flex items-center justify-between p-4 w-full absolute'>
      <Link to='/' className='relative z-10'> {/* Add relative and z-10 to the link */}
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="btn">
          <Link to='/acc'>
            <button className='text-white px-4 py-2 cursor-pointer relative z-10 '>Account</button>
          </Link>
          <button onClick={Handel_logout} className='text-white bg-red-600 px-4 py-2 rounded cursor-pointer relative z-10 '>Logout</button>
        </div>
      ) : (
        <div className="btn">
          <Link to='/login'>
            <button className='text-white px-4 py-2 cursor-pointer relative z-10 '>Sign-In</button>
          </Link>
          <Link to='/sign-up'>
            <button className='text-white bg-red-600 px-4 py-2 rounded cursor-pointer relative z-10 '>Sign-Up</button>
          </Link>
        </div>
      )
      }
    </div>
  );
}

export default Nav_bar;
