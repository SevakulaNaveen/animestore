import { useAnimeContext } from "../context/AnimeContext";
import Card from "./Card";


const Hero = () => {
    const { cards, user } = useAnimeContext();
    return (
        <div >
            <div className="ring-1 ring-slate-900/5 m-2 rounded-md shadow-lg ">
                <div className="text-center p-5 space-y-1" >
                    <h1 className=" text-3xl font-bold font-sans text-purple-800">AnimeHavenHub</h1>
                    <p className="text-slate-700 font-sans font-semibold text-lg">"Immerse Yourself in the World of Anime -Where Dreams and Reality Collide"</p>{" "}
                    {user ? <h1 className="text-purple-900 font-sans font-bold my-3 text-2xl">Hello, {user.username} Have a Great Day</h1> : null}
                </div>
                <div className="p-5 space-y-6 ">
                    <h1 className="text-center  text-3xl text-slate-800 font-sans font-bold">Trending Now</h1>
                    <div className="flex gap-10 space-x-6 justify-center">
                        {cards.map((card) => (
                            <Card key={card._id} card={card} />
                        ))}

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Hero;