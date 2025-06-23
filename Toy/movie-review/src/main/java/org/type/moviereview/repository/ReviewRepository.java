package org.type.moviereview.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.type.moviereview.domain.Review;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByMovieId(Long movieId);
}
