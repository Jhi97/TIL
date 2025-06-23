import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

interface MovieDetails {
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
}
interface Review {
    id: number;
    rating: number;
    content: string;
    createdAt: string;
}

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieDetail = () =>{
    const {movieId} = useParams<{ movieId: string; }>();
    const [movie, setMovie] = useState<MovieDetails | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');

    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=ko-KR`)
            .then(response => setMovie(response.data));

        axios.get(`http://localhost:8080/api/reviews?movieId=${movieId}`)
            .then(response => setReviews(response.data))
    }, [movieId]);
    
    const handleReviewSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        const reviewData = {movieId: Number(movieId), rating, content};

        axios.post('http://localhost:8080/api/reviews', reviewData)
            .then(response => {
                setReviews([...reviews, response.data]);
                //폼 초기화
                setRating(0);
                setContent('');
            });
    };
    
    if(!movie) return <div>로딩 중 ...</div>;
    
    return (
        <div className="movie-detail-container">
            <div className="movie-detail-header">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-detail-info">
                    <h1>{movie.title}</h1>
                    <p><strong>개봉일:</strong> {movie.release_date}</p>
                    <p><strong>평점:</strong>⭐ {movie.vote_average.toFixed(1)}</p>
                    <p>{movie.overview}</p>
            </div>
                <div className="review-section">
                    <h2>리뷰</h2>
                    <form onSubmit={handleReviewSubmit} className="review-form">
                        <fieldset>
                            <legend>리뷰 남기기</legend>
                            <label>평점:
                                <input type="number" value={rating} onChange={e => setRating(Number(e.target.value))} min="0" max="5" step="0.5" required />
                            </label>
                            <label>내용:
                                <textarea value={content} onChange={e => setContent(e.target.value)} required />
                            </label>
                            <button type="submit">등록</button>
                        </fieldset>
                    </form>

                    <div className="review-list">
                        {reviews.length > 0 ? (
                            reviews.map(review => (
                                <div key={review.id} className="review-item">
                                    <p><strong>평점:</strong> {review.rating} / <strong>내용:</strong> {review.content}</p>
                                    <small>작성일: {new Date(review.createdAt).toLocaleDateString()}</small>
                                </div>
                            ))
                        ) : (
                            <p>아직 작성된 리뷰가 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail;