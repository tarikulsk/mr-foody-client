

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../component/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {

        logOut()
            // eslint-disable-next-line no-unused-vars
            .then(result => {

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="navbar text-white grid md:grid-cols-3 px-10 py-4 bg-purple-700 text-primary-content">
            <div>
                {/* <a className="btn btn-ghost normal-case text-3xl font-bold "></a> */}
                <Link to={'/'} className="btn btn-ghost normal-case text-3xl font-bold ">Mr. Foody</Link>
            </div>
            <div className='gap-5 justify-center' >
                <Link to={'/'}>Home</Link>
                <Link to={'/blogs'}>Blogs</Link>
            </div>
            <div className='gap-7 justify-end'>


                {
                    <Link to={'/login'} className='px-4 py-1 d-none rounded btn-warning text-white'>Login</Link>
                }

                {
                    user && <img className='h-8 w-8' title={user.displayName} src={user.photoURL} alt="" />
                }
                {user && <span className='text-pink-100'> <button onClick={handleLogOut}>Sign Out</button> </span>}
            </div>
        </div>
    );
};

export default Header;