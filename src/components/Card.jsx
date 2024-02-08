import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
function Card({ card }) {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < Math.floor(rating); i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
        }
        if (rating % 1 !== 0) {
            stars.push(<FontAwesomeIcon key={Math.floor(rating)} icon={faStarHalfAlt} className="text-yellow-500" />);
        }
        return stars;
    };
    return (
        <div className="card h-96 w-64 bg-white ring-1 ring-slate-900/5 shadow-lg rounded-md border mx-2 p-3 space-y-2 ">
            <div className="h-32">
                <img className="h-full w-full " src={card.image} alt="" />
            </div>
            <h1 className="text-purple-900 font-sans font-bold text-xl text-center">{card.title}</h1>
            <div className='space-y-3'>
                <p className="font-serif text-justify text-slate-950 whitespace-pre-line hover:text-slate-700">{card.description}</p>

                <div className="flex items-center justify-center">
                    <div className="flex items-center">
                        {renderStars(card.rating, '2x')}
                        {/* <span className="text-gray-500 ml-1">{card.rating}</span> */}
                    </div>
                </div>
                <div className="text-center flex gap-2">
                    <a href="https://9animes.ph/" className='bg-purple-700 w-full text-white font-sans font-semibold p-2 rounded-md hover:bg-purple-500'>
                        <button className=" " >Watch</button>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Card;