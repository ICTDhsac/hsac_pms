
// src/components/Login.jsx
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import SweetAlertComponent from './SweetAlertComponent';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import alert styles if needed
import '../assets/css/tailwind.css';
import '../assets/css/login.css';
import hsac_logo from '../assets/images/hsac_logo.png';

const Login_v2 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAuth, setAuth] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(() => true);
        setError('');

        setTimeout(() => {
            if (email === 'user@example.com' && password === 'password') {
                alert('Login successful!');
                setAuth(() => true);
                setError('');
            } else {
                setError('Invalid email or password');
            }
            setLoading(false);
        }, 500);

    };

    const handleClick = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => alert('Click Yes')
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleConfirm = () => {
        setShowAlert(false);
        // alert('Confirmed!');
    };

    const handleCancel = () => {
        setShowAlert(false);
        // alert('Cancelled!');
    };

    return (
        <div className="login_bg flex items-center justify-center min-h-screen">
            <div className="shadow-2xl rounded-lg p-8 max-w-lg w-full bg-white ring-1">
                <img className='m-auto opacity-90' src={hsac_logo} alt="HSAC Logo" width={80} />
                <h1 className='text-center text-xl text-gray-600 font-medium'>Human Settlements Adjudication Commission</h1>
                <h2 className='text-center text-sm italic text-gray-500'>(formerly Housing and Land Use Regulatory Board)</h2>
                <hr className='m-3'/>
                <h3 className="text-center text-gray-600 text-lg font-medium mb-6">
                    {!isAuth ? "User Login" : "User Authentication"}
                </h3>
                {error && <div className="bg-red-100 text-red-700 p-4 rounded mb-4">{error}</div>}

                {!isAuth &&
                (<form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <div className="relative mt-1">
                            <input
                                type="email"
                                id="email"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-sky-100 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fa-solid fa-envelope text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative mt-1">
                            <input
                                type="password"
                                id="password"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-cyan-100 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your password ..."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i className="fa-solid fa-key text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className='mb-2'>
                            <input id="terms_condition" type="checkbox" value="" className="box w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="terms_condition" className=" ms-2 text-xs font-medium text-gray-600">I accept the <a href="#" className='text-red-600 hover:underline'>Terms and condition</a></label>
                        </div>
                        <div className='flex justify-between text-xs font-medium text-gray-600'>
                            <div className=''>
                                <input id="remember_me" type="checkbox" value="" className="box w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="remember_me" className="ms-2">Remember me</label>
                            </div>
                            <a className='text-sky-600 text-base transition-all hover:underline hover:text-sky-800' href="#">Forgot Password?</a>
                        </div>

                    </div>
                    <div className="flex justify-end mt-6">
                        <button type="submit" className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:tra">
                            <i className="fa-solid fa-right-to-bracket mr-2"></i> Login &nbsp; {isLoading && <div><i className="fa fa-spinner fa-spin-pulse"></i></div> }
                        </button>
                    </div>
                
                </form>)}
                {isAuth && (
                    <form className='p-3 border shadow-md'>
                        <input
                            type="password"
                            id="user_token"
                            placeholder="Enter Your Token"
                            className="block text-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm hover:bg-sky-100 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login_v2;
