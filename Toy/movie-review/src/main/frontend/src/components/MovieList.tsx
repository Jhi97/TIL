import MovieCard, {type Movie} from "./MovieCard.tsx";
import {useEffect, useState} from "react";
import axios from "axios";


const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=ko-KR&page=1`

const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(error => {
                console.error("영화 데이터를 불러오는 중 에러 발생(API KEY 연결) : " + error);
            })
    }, []);

    return (
        <div className="movie-list">
            {movies.map(movie => (<MovieCard key={movie.id} movie={movie}/>))}
        </div>
    )
}

export default MovieList;