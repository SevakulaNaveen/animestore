import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useAnimeContext } from "../context/AnimeContext";

const Geners = () => {
    const [selectedGenre, setSelectedGenre] = useState('adventure');
    const { topCrads } = useAnimeContext();
    console.log(topCrads);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
    };

    // Filter cards based on the selected genre
    const filteredCards = selectedGenre
        ? topCrads.filter((card) => card.genre && Array.isArray(card.genre) && card.genre.includes(selectedGenre))
        : topCrads;

    return (
        <div className="ring-1 ring-slate-900/5 m-2 h-screen " style={{ height: "520px" }}>
            <div className="ring-1 ring-slate-900/5 rounded-md  h-full p-2 flex" >
                <div className=" px-14 py-10 space-y-10 text-2xl rounded-md  font-sans font-semibold bg-slate-200 w-1/4 h-full">
                    <h1><Link to="#"
                        onClick={() => handleGenreClick('adventure')}
                        className={selectedGenre === 'adventure' ? 'text-purple-900 underline' : ''}
                    >Adventure</Link></h1>
                    <h1><Link to="#"
                        onClick={() => handleGenreClick('action')}
                        className={selectedGenre === 'action' ? 'text-purple-900 underline' : ''}
                    >Action</Link></h1>
                    <h1><Link to="#"
                        onClick={() => handleGenreClick('fantacy')}
                        className={selectedGenre === 'fantacy' ? 'text-purple-900 underline' : ''}
                    >Fantasy</Link></h1>
                    <h1><Link to="#" onClick={() => handleGenreClick('sports')}
                        className={selectedGenre === 'sports' ? 'text-purple-900 underline' : ''}>Sports</Link></h1>
                    <h1><Link to="#" onClick={() => handleGenreClick('mystery')}
                        className={selectedGenre === 'mystery' ? 'text-purple-900 underline' : ''}
                    >Mystery</Link></h1>
                    <h1><Link to="#" onClick={() => handleGenreClick('comedy')}
                        className={selectedGenre === 'comedy' ? 'text-purple-900 underline' : ''}>Comedy</Link></h1>
                </div>

                <div className="flex ml-3 w-full rounded-md p-12 bg-slate-200 ">
                    {filteredCards.map((card) => (
                        <Card key={card._id} card={card} />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default Geners;
