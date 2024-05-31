
// src/components/Login.jsx
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

/* Component */
/* import SweetAlertComponent from './SweetAlertComponent';
    const [showAlert, setShowAlert] = useState(false);

    <SweetAlertComponent
        show={showAlert}
        title="Are you sure?"
        text="You won't be able to revert this!"
        icon="warning"
        showCancelButton={true}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
/> */

/* import Modal from './Modal';
    const [isModalOpen, setIsModalOpen] = useState(false);
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modalTitle="Modal Title" />
 */

/* sweetalert */
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

/* css */
import '../assets/css/tailwind.css';
import '../assets/css/login.css';
import 'react-toastify/dist/ReactToastify.css';
/* imanges */
import hsac_logo from '../assets/images/hsac_logo.png';

const Login_v2 = () => {
    const [email, setEmail] = useState('user@example.com');
    const [password, setPassword] = useState('password');
    const [isLoading, setLoading] = useState(false);
    const [isAuth, setAuth] = useState(false);
    const [isValidToken, setValidToken] = useState(null);

    const notify = (msg) => toast((msg));

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(() => true);

        setTimeout(() => {
            if (email === 'user@example.com' && password === 'password') {

                setAuth(() => true);
                notify(<div><i className="fa fa-thumbs-up"></i>  Login approved</div>);
                setTimeout(() => {
                    notify(<div><i class="fa-solid fa-circle-info"></i>  Kindly open your authenticator app and enter the required token to proceed.</div>);
                }, 500);
                

            } else {

                MySwal.fire({
                    show: true,
                    title: "Login",
                    text: "Invalid Username and Password",
                    icon: "warning",
                    confirmButtonText: 'OK'
                })

            }
            setLoading(false);
        }, 500);

    };

    return (
        <div className="login_bg flex items-center justify-center min-h-screen">

            <ToastContainer />

            <div className="shadow-2xl rounded-lg p-8 min-h-[70vh] max-w-lg w-full bg-white ring-1">
                <div className="md:flex items-stretch">
                    <div>
                        <img className='m-auto opacity-90' src={hsac_logo} alt="HSAC Logo" width={80} />
                    </div>
                    <div className='w-full flex flex-col justify-center'>
                        <h1 className='text-center text-basis text-gray-600 font-medium'>Human Settlements Adjudication Commission</h1>
                        <h2 className='text-center text-sm italic text-gray-500'>(formerly Housing and Land Use Regulatory Board)</h2>
                        
                    </div>
                </div>
                <hr className='m-3'/>
                <h3 className="text-center text-gray-600 text-lg font-medium mb-6">
                    {!isAuth ? "User Login" : "User Authentication"}
                </h3>

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
                    <div className="flex justify-end mt-8">
                        <button type="submit" className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:tra">
                            <i className="fa-solid fa-right-to-bracket mr-2"></i> Login &nbsp; {isLoading && <div><i className="fa fa-spinner fa-spin-pulse"></i></div> }
                        </button>
                    </div>
                
                </form>)}
                {isAuth && (
                    <form className='p-3 border shadow-md flex' onSubmit={(e) => e.preventDefault()}>
                        <div className='flex flex-col justify-center text-center'>
                            <div>
                                <label className='text-center w-full inline-block mb-3' htmlFor="user_token"> <i class="fa-solid fa-key"></i> Enter your token</label>
                                <input
                                    type="password"
                                    id="user_token"
                                    placeholder="6-digit PIN"
                                    className={`block text-center w-30 px-4 py-2 border border-gray-300 rounded-md ring shadow-sm hover:bg-sky-100 focus:border-indigo-500 focus:ring-offset-4 ${isValidToken ? 'focus:border-green-500' : 'focus:border-red-500'}`}
                                />
                                <button
                                    type='submit'
                                    className="inline-flex items-center px-4 py-1 mt-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:tra"
                                >
                                    <i className="fa fa-submit"></i> &nbsp;Submit
                                </button>
                            </div>
                        </div>
                        <figure className='w-auto'>
                            <img
                                src="data:image/png;base64,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"
                                alt="Authenticator app QR code"
                                className='m-auto'
                            />
                            <figcaption className='p-1 italic text-sm'>Open your authenticator app and scan the qr code.</figcaption>
                        </figure>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login_v2;
