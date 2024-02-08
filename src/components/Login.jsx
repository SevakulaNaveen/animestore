import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAnimeContext } from "../context/AnimeContext";


const Login = () => {

    const { login, isAuthenticated, error } = useAnimeContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);

    }

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="ring-1 ring-slate-900/5 m-2 h-screen flex items-center justify-center" style={{ height: "520px" }}>
            <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center">
                <div className="w-1/2 p-8 ">
                    <div className=" ring-1 ring-slate-900/5 p-2 rounded-md shadow-md ">
                        <img src="onepiece.jpg" alt="One Piece" className=" ring-1 ring-slate-950/5 shadow-md w-full h-full object-cover rounded-md " />
                    </div>

                </div>

                <div className="w-1/2 pl-8">
                    <div className="bg-white ring-1 ring-slate-950/5 rounded-md shadow-md p-6">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Login</h2>
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {console.log(error)}
                            {error && (
                                <div className="text-red-500">{error}</div>
                            )}
                            <div className="space-x-4 flex">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white p-2 rounded-md w-1/2 hover:bg-blue-600"
                                >
                                    Login
                                </button>
                                <Link
                                    to='/signup'
                                    className="bg-green-500 text-center text-white p-2 rounded-md w-1/2 hover:bg-green-600"
                                >
                                    Signup
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
