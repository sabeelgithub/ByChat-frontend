import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import banner from '../Assets/seraxh.avif'
import Loaders from './Loader/Loaders'


function LoginForm() {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setLoader(false)
        }, 600);
      }, [])
    return (
        <>
        {loader ? <Loaders/>: <div className=' md:flex w-full h-full'>

        <div className="md:h-[30rem] flex justify-center md:px-5 mt-20 mb-7  md:w-1/2  bg-white">
            <div className="
            flex flex-col
            bg-orange-300
            shadow-md
            px-4

            sm:px-6
            md:px-0
            lg:px-10
            md:my-1
            py-4
            rounded-3xl
            w-96
            md:w-[25rem]
            md:h-[22rem]
            ">

                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Login
                </div>

                <div className="mt-10">
                    <form action="#">

                        <div className="flex flex-col mb-5">
                            <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">E-Mail Address:</label>
                            <div className="relative">
                                <div className="
                            inline-flex
                            items-center
                            justify-center
                            absolute
                            left-0
                            top-0
                            h-full
                            w-10
                            text-gray-400
                            ">
                                    <i className="fas fa-at text-blue-500" />
                                </div>
                                <input id="email" type="email" name="email" className="
                            text-sm
                            placeholder-gray-500
                            pl-10
                            pr-4
                            rounded-2xl
                            border border-gray-400
                            w-full
                            py-2
                            focus:outline-none focus:border-blue-400
                            " placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                            <div className="relative">
                                <div className="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                        ">
                                    <span>
                                        <i className="fas fa-lock text-blue-500" />
                                    </span>
                                </div>
                                <input id="password" type="password" name="password" className="
                                text-sm
                                placeholder-gray-500
                                pl-10
                                pr-4
                                rounded-2xl
                                border border-gray-400
                                w-full
                                py-2
                                focus:outline-none focus:border-blue-400
                                " placeholder="Enter your password" />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button type="submit" className="
                                flex
                                mt-2
                                items-center
                                justify-center
                                focus:outline-none
                                text-white text-sm
                                sm:text-base
                                bg-blue-500
                                hover:bg-blue-600
                                rounded-2xl
                                py-2
                                w-full
                                transition
                                duration-150
                                ease-in
                                ">
                                <span className="mr-2 uppercase">Sign In</span>
                                <span>
                                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                    <div className="flex justify-center items-center mt-3">
                        <a href="#" target="_blank" className="
                    inline-flex
                    items-center
                    text-gray-700
                    font-medium
                    text-xs text-center
                    ">
                            <p className="ml-2">Don't have an account?
                            </p></a><Link to="/register" className="text-xs ml-2 text-blue-500 font-semibold">Register here</Link>
                    </div>
                </div>

            </div>

        </div>
        <div className=' md:w-1/2 mt-7 mb-7 sm:w-full h-[30rem] p-2 flex justify-center '>

            <img src={banner} alt="" className='h-full ' />
        </div>



    </div> }
            

        </>
    )
}

export default LoginForm