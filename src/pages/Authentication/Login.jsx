import React, { useContext } from 'react';
import login from '../../../public/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    const {signIn,googleUser} = useContext(AuthContext)
    // console.log(user);
    const navigate = useNavigate()
    const pathname = location.state?.from?.pathname || '/'

    const handleGoogle = () => {
        googleUser()
            .then(result => {
                // console.log(result.user);
                navigate(pathname)
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" md:mr-36 md:w-1/2">
                    <img className='w-[600px]' src={login} alt="" />
                </div>
                <div className="card  md:w-1/2  shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center py-6">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <button onClick={handleGoogle} className='btn btn-outline my-2 mx-6'> <FaGoogle></FaGoogle>  <span className='ml-4'>Google</span></button>
                    <h1 className='text-center mb-4'>New to Toy Cars? <Link className=' font-bold  ' to='/register'>Sign Up</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Login;