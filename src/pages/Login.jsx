import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthorContext';

const Login = () => {
        const [email, setemail] = useState('');
        const [pass, setpasss] = useState('');
        const { user,  login } = useAuth();
        const [err,seterr] = useState('');
        const nav = useNavigate();

        const Handel_submit = async(e) => {
            e.preventDefault()
            seterr('');
            try {
                await login(email, pass);
                nav('/')
            } catch (err) {
                seterr(err.message);
                console.log(err);
            }
        }
    
        return (
            <>
                <div className='w-full h-screen'>
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Netflix" className="w-full h-full object-cover hidden sm:block absolute" />
                    <div className='bg-black/60 fixed top-0 lef-0 w-full h=screen '></div>
                    <div className='fixed w-full px-4 py-24 z-50'>
                        <div className='max-w-[450px] h-[580px] mx-auto bg-black/75 text-white '>
                            <div className='max-w-[320px] mx-auto py-16 '>
                                <h1 className='text-3xl font-bold '>Sign-In</h1>
                                {err ? <p className='p-3 font-serif'>{err}</p> : null}
                                <form className='w-full flex flex-col py-5' onSubmit={Handel_submit}>

                                    <input onChange={(e) => setemail(e.target.value)} type="email" placeholder='mail' className='p-4 my-2 bg-gray-700 rounded  ' />
                                    <input onChange={(e) => setpasss(e.target.value)}  type="password" placeholder='Password' className='p-4 my-2 bg-gray-700 rounded ' />
                                    <button className='bg-res-600 py-3 my-6 rounded font-bold bg-red-600 ' >Sig-Up</button>

                                    <div className='flex justify-between items-center text-sm text-gray-400'>
                                        <p><input type="checkbox" className='mr-2 ' />Rember Me </p>
                                        <p>Need Help</p>
                                    </div>
                                    <p className='mt-3 py-8'>
                                        <span className='text-gray-500'>New To NETFLIX? </span>
                                        <Link to={'/sign-up'}>
                                            Sign-Up
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default Login;