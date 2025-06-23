package org.type.moviereview.service;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.type.moviereview.domain.Review;
import org.type.moviereview.dto.ReviewRequest;
import org.type.moviereview.repository.ReviewRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public Review createReview(ReviewRequest request) {
        Review review = new Review();
        review.setMovieId(request.movieId());
        review.setRating(request.rating());
        review.setContent(request.content());
        return reviewRepository.save(review);
    }

    public List<Review> getReviewsByMovieId(Long movieId) {
        return reviewRepository.findByMovieId(movieId);
    }

}
