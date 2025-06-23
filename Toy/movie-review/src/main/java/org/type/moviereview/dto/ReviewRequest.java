package org.type.moviereview.dto;


public record ReviewRequest(
        Long movieId,
        double rating,
        String content
){

}
