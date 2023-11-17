import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile, Action  } from '../../store/actions'

const Register = () => {
    const dispatch = useDispatch();
    return (
        <div className="login-page">
            <div className="m-auto mt-10 py-12 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 md:max-w-2xl bg-white">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold xl:text-5xl
                xl:text-bold">The Facebook</h2>
                <div className="mt-12">
                    <form>
                        <div className="mt-8">
                            <div className="text-left text-sm font-bold text-gray-700 tracking-wide">First Name</div>
                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter first name" />
                        </div>
                        <div className="mt-8">
                            <div className="text-left text-sm font-bold text-gray-700 tracking-wide">Last Name</div>
                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter last name" />
                        </div>
                        <div className="mt-8">
                            <div className="text-sm font-bold text-gray-700 tracking-wide text-left">Mobile Number or Email Address</div>
                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter nobile number or email address" />
                        </div>
                        <div className="mt-8">
                            <div className="text-left text-sm font-bold text-gray-700 tracking-wide">Password</div>
                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password" />
                        </div>
                        <div className="mt-10">
                            <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                            shadow-lg">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                         Have an account ? <button  onClick={() => dispatch({ type:  Action.IS_LOGIN_FORM, payload: true })} className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;