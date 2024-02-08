import { Link } from "react-router-dom"
import { useAnimeContext } from "../context/AnimeContext";
const Header = () => {
    const { user, isAuthenticated, logout } = useAnimeContext();
    return (
        <nav className="bg-slate-100 flex h-20 justify-between items-center font-sans font-semibold text-lg ">
            <div className="mx-10">
                <h1 className="hover:text-purple-700 text-purple-900 font-bold text-xl">AnimeHavenHub</h1>
            </div>
            <div className=" space-x-8">
                <Link to='' className="hover:text-purple-700 hover:underline text-purple-900">Home</Link>
                <Link to='/topanime' className="hover:text-purple-700 hover:underline text-purple-900">Top Animes</Link>
                <Link to='/geners' className="hover:text-purple-700 hover:underline text-purple-900">Genres</Link>
                <Link to='/addanime' className="hover:text-purple-700 hover:underline text-purple-900">Add Anime</Link>
            </div>
            <div className="mr-10">
                {isAuthenticated ?
                    (<div className="flex items-center">
                        <p className="text-purple-800 mr-4 font-sans font-semibold hover:underline">Welcome, {user.username || user.email}</p>
                        <button className="bg-purple-700 rounded-full shadow-lg px-4 py-2 w-32 text-white hover:bg-purple-600" onClick={logout} >Logout</button></div>) :
                    (<Link to='/login'><button className="bg-purple-700 rounded-full shadow-lg px-4 py-2 w-32 text-white hover:bg-purple-600" >Login</button> </Link>)}

            </div>
        </nav>
    )
}
export default Header;