import { useState } from "react";
import { useAnimeContext } from "../context/AnimeContext";
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const { signup, isAuthenticated } = useAnimeContext();
    const [username, setUsername] = useState(''); 3
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault();
        await signup(username, email, password);
        navigate('/login')
    }

    return (
        <div className="ring-1 ring-slate-900/5 m-2 h-screen flex items-center justify-center" style={{ height: "520px" }}>
            <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center">
                <div className="w-1/2 pr-8 ">
                    <div className="ring-1 ring-slate-950/5 shadow-md rounded-md p-2">
                        <img src="demon.jpg" alt="One Piece" className=" ring-1 ring-slate-950/5 shadow-md w-full h-96 object-cover rounded-md " />
                    </div>

                </div>

                <div className="w-1/2 pl-8">
                    <div className="bg-white  ring-1 ring-slate-900/5 rounded-md shadow-md p-8">
                        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Signup</h2>
                        <form className="space-y-4" onSubmit={handleSignup}>
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    className="mt-1 p-2 w-full border rounded-md"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
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
                            <div>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white p-2 rounded-md w-full hover:bg-green-600"
                                >
                                    Signup
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;