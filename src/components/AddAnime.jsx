import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAnime = () => {
    const navigate = useNavigate();
    const [animeData, setAnimeData] = useState({
        image: "",
        title: "",
        description: "",
        rating: "",
        genre: "",
    });

    const handleChange = (e) => {
        setAnimeData({
            ...animeData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // logic to send the form data to your API endpoint
        const response = await axios.post("http://localhost:3000/api/topanime", animeData);

        console.log("data added succesfully", response.data);
        // Reset form fields after submission if needed
        setAnimeData({
            image: "",
            title: "",
            description: "",
            rating: "",
            genre: "",
        });
        navigate('/topanime')
    };

    return (

        <div className=" ring-slate-900/5 h-screen flex items-center justify-center">

            <div className="w-3/4 p-16">
                <div className="bg-white ring-1 ring-slate-950/5 rounded-md shadow-md p-6 ">
                    <h2 className="text-2xl font-bold mb-4 text-center">Add New Anime</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-4">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                Image URL
                            </label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={animeData.image}
                                onChange={handleChange}
                                placeholder="image url here"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={animeData.title}
                                onChange={handleChange}
                                placeholder="anime title here"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={animeData.description}
                                onChange={handleChange}
                                placeholder="anime discription here in 14 or less words"
                                rows="4"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                                Rating
                            </label>
                            <input
                                type="text"
                                id="rating"
                                name="rating"
                                value={animeData.rating}
                                onChange={handleChange}
                                placeholder="please enter rating"
                                className="mt-1 p-2 w-full border rounded-md"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                                Genre
                            </label>
                            <input
                                type="text"
                                id="genre"
                                name="genre"
                                value={animeData.genre}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border rounded-md"
                                placeholder="please enter genre"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
                        >
                            Add Anime
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default AddAnime;