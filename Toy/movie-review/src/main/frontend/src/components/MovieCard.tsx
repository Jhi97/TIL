import './MovieCard.css'
import {Link} from "react-router-dom";


//영화 데이터의 타입 정의
export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({movie}: MovieCardProps) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <Link to={`/movie/${movie.id}`} className="movie-card-link">
            <div className={"movie-card"}>
                <img src={imageUrl} alt={movie.title}/>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <span>⭐ {movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;