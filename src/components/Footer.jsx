import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-100  flex items-center h-20 font-sans font-semibold p-4">
            <div className="container mx-auto flex justify-around items-center">
                <div>
                    <h1 className="text-lg font-semibold text-purple-900"> <span className="font-bold">AnimeHavenHub</span> &copy; 2024 AnimeHavenHub. All rights reserved.</h1>
                </div>

                <div className="flex items-center text-purple-900 space-x-8 ">
                    <Link className="hover:text-purple-700 hover:underline">Privacy Policy</Link>
                    <Link className="hover:text-purple-700 hover:underline">Terms of Service</Link>
                    <Link className="hover:text-purple-700 hover:underline">Contact Us</Link>
                </div>
            </div>
        </footer>

    )
}
export default Footer;