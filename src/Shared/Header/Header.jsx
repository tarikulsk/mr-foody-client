
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar text-white grid md:grid-cols-3 px-10 py-2 bg-purple-400 text-primary-content">
            <div>
                {/* <a className="btn btn-ghost normal-case text-3xl font-bold "></a> */}
                <Link to={'/'} className="btn btn-ghost normal-case text-3xl font-bold ">Mr. Foody</Link>
            </div>
            <div className='gap-5 justify-center' >
                <Link to={'/'}>Home</Link>
                <Link to={'/blogs'}>Blogs</Link>
            </div>
            <div className='gap-7 justify-end'>

                <p>Profile</p>

                <Link to={'/login'} className='btn btn-warning'>Login</Link>

            </div>
        </div>
    );
};

export default Header;