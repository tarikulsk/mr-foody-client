
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-3xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Full Name" className="input input-bordered" />
                            </div>
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
                                <input type="password" name='confirm' required placeholder="confirm password" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='text-center'>If You are Already User ? <Link to={'/login'} className='btn-link'>Login</Link> </p>
                        <hr />
                        <div className='mt-5 p-5 text-center '>
                            <h4 className='text-2xl'>Login With </h4>

                            <div className='flex mt-3 justify-around'>
                                <div >

                                    <button><img className='h-12 w-12' src="https://cdn.freebiesupply.com/logos/large/2x/google-icon-logo-png-transparent.png" alt="" /></button>

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

export default SignUp;