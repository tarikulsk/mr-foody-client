/* eslint-disable no-unused-vars */
// // eslint-disable-next-line no-unused-vars, no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';



const Login = () => {
    const { logIn, signInWithGoogle } = useContext(AuthContext);
    const [show, setShow] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const from = location.state?.from?.pathname || '/';

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();

                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })

        console.log(email, password);
        if (password.length > 6) {
            setError('Password must be 6 characters')
            return
        }

    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error);
            })

    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" />
                                <p onClick={() => { setShow(!show) }}> <small>
                                    {
                                        show ? <span>Hide Password</span> : <span>Show Password</span>
                                    }
                                </small> </p>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className='text-center'>{error}</p>
                        <br />
                        <p className='text-center'>If You are a New User ? <Link to={'/signup'} className='btn-link'>Register</Link> </p>
                        <hr />
                        <div className='mt-5 p-5 text-center '>
                            <h4 className='text-2xl'>Login With </h4>

                            <div className='flex mt-3 justify-around'>
                                <div >

                                    <button onClick={handleGoogleLogin}><img className='h-12 w-12' src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png" alt="" /></button>

                                </div>
                                <div>
                                    <button><img className='h-12 w-12' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></button>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default Login;