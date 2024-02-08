import Card from "./Card";
import { useAnimeContext } from "../context/AnimeContext";

const TopAnime = () => {
    const { topCrads } = useAnimeContext();
    // const [cards, setCards] = useState([
    //     {
    //         id: 1,
    //         image: 'https://i.ytimg.com/vi/WeWMfRunu1w/maxresdefault.jpg',
    //         title: 'Attack on Titan',
    //         description: 'Humanity fights for survival against giant humanoid creatures.',
    //         rating: 9.0,
    //     },
    //     {
    //         id: 2,
    //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvUSRvzzkl4moS2L-nwCUJG76qmr84WczQg&usqp=CAU',
    //         title: 'Attack on Titan',
    //         description: 'Humanity fights for survival against giant humanoid creatures.',
    //         rating: 9.0,
    //     },
    //     {
    //         id: 3,
    //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpgKaz4Mlo191u4Na_lScRGyw8JA7c1BJeg&usqp=CAU',
    //         title: 'Attack on Titan',
    //         description: 'Humanity fights for survival against giant humanoid creatures.',
    //         rating: 9.0,
    //     },
    //     {
    //         id: 3,
    //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQN8wp8O1d8GCFyaqaM8-wInO5N5cTEVFog&usqp=CAU',
    //         title: 'Attack on Titan',
    //         description: 'Humanity fights for survival against giant humanoid creatures.',
    //         rating: 9.0,
    //     },
    //     {
    //         id: 4,
    //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYjhNrIKu6HbOYlkvsE36hHGw7VuHx-FJJg&usqp=CAU',
    //         title: 'Attack on Titan',
    //         description: 'Humanity fights for survival against giant humanoid creatures.',
    //         rating: 9.0,
    //     },
    //     {
    //         id: 5,
    //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3gjo0z5NzVDDsflnlK5Tl6dqxsqx_fNjOrA&usqp=CAU',
    //         title: 'Attack on Titan',
    //         description: 'Humanity fights for survival against giant humanoid creatures.',
    //         rating: 9.0,
    //     },
    // ])
    return (

        <div>
            <div className="ring-1 ring-slate-900/5 m-2 rounded-md shadow-lg">
                <h1 className="text-3xl text-purple-800 font-sans font-bold text-center m-2 p-6 underline">Top Animes of 2023</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-16 pt-0 pb-6">
                    {topCrads.map((card) => (<Card key={card._id} card={card} />))}
                </div>


            </div>
        </div>
    )
}

export default TopAnime;