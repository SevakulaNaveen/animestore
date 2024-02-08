import { useEffect, useState } from "react"
import AnimeContext from "./AnimeContext";
import axios from "axios";

const AnimeProvider = ({ children }) => {


    const [cards, setCards] = useState([]);
    const [topCrads, setTopCards] = useState([]);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/trending');
                setCards(response.data)
            } catch (error) {
                console.log('error fetching the data', error);
            }
        }
        fetchData();

    }, [])

    useEffect(() => {
        const fetchTopAnime = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/topanime');
                setTopCards(response.data)
            } catch (error) {
                console.log('error fetching the data', error);
            }
        }
        fetchTopAnime();
    }, [])

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/api/login', { email, password });
            if (response.data.success) {
                console.log(response.data);
                const { email, username } = response.data;
                setUser({ email, username });
                setIsAuthenticated(true);
                setError(null);
            } else {
                console.error('Login failed:', response.data.message);

            }
        } catch (error) {
            console.error('Error during login:', error);
            setIsAuthenticated(false);
            setError('Invalid Email or Password. Please try again !!')
        }
    }

    const signup = async (username, email, password) => {
        try {
            const response = await axios.post('http://localhost:3000/api/signup', { username, email, password })
            if (response.data.success) {
                setUser({ username, email });

            } else {
                console.error('Signup failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    }

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    }

    return (
        <AnimeContext.Provider value={{ cards, topCrads, isAuthenticated, logout, login, signup, user, error }}>
            {children}
        </AnimeContext.Provider>
    )
}

export default AnimeProvider;