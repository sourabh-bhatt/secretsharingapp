import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-md shadow-md w-full md:w-96">
                <h1 className="text-center text-2xl font-bold mb-6">Login</h1>
                <form className="login-form">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Username"
                        className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
                    />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4"
                    />

                    {isAuthenticated && <h2 className="text-center text-xl font-semibold mb-4">Hello {user?.name}</h2>}
                    {isAuthenticated ? (
                        <button
                            className="w-full bg-red-500 text-white py-3 px-4 rounded-md text-sm transition duration-300 hover:bg-red-600 focus:outline-none focus:shadow-outline"
                            onClick={(e) => logout()}
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <button
                                className="w-full bg-blue-500 text-white py-3 px-4 rounded-md text-sm transition duration-300 hover:bg-blue-600 focus:outline-none focus:shadow-outline focus:border-blue-300 mb-4"
                                onClick={() => loginWithRedirect()}
                            >
                                LOGIN
                            </button>
                            <p className="text-center text-gray-500 text-sm mb-4">or</p>
                            <button
                                className="w-full bg-green-500 text-white py-3 px-4 rounded-md text-sm transition duration-300 hover:bg-green-600 focus:outline-none focus:shadow-outline"
                                onClick={()=>loginWithRedirect()}
                            >
                                Don't have an account? SIGN UP
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Login;
