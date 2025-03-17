import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    constructor() {
        super() ;
        this.state = {
            movies: [{
                title: "The Avengers",
                plot: "Plot of the movie is related to super natural powers",
                price: 199,
                rating: 8.0,
                poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                stars: 0,
                fav:false,
                isInCart:false
                },
            
                {
                title: "Ironman",
                plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
                price: 399,
                rating: 8.9,
                poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                stars: 0,
                fav:false,
                isInCart:false
                },
                {
                title: "The Avengers",
                plot: "Plot of the movie is related to super natural powers",
                price: 199,
                rating: 8.0,
                poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
                stars: 0,
                fav:false,
                isInCart:false
                },
            ]
        }
    }

    handleIncStars = (movie) => {
        const {movies} = this.state ;
        const mid = movies.indexOf(movie);

        if(movies[mid].stars >= 5) {
            return ;
        }

        movies[mid].stars += 0.5 ;

        this.setState({
            movies: movies
        })
    }

    handleDecStars = (movie) => {
        const { movies } = this.state;
        const mid = movies.indexOf(movie);
    
        if (movies[mid].stars <= 0) {
            return;
        }
    
        movies[mid].stars -= 0.5;
    
        this.setState({
            movies: movies
        });
    }
    
    render() {
        //const {title, plot, price, rating, stars, fav, poster} = this.state;
        const {movies} = this.state;

        return (
        <div>
            {/*This is the 1st method of passing props to movie card component.*/}  
            {/*<MovieCard title = {title} plot = {plot} price = {price} rating = {rating} stars = {stars} fav = {fav}/>*/}
            
            {/*This is the second method of passing props to movie card component.*/}
            {/*<MovieCard movies={this.state}/>*/}  

            {movies.map((movie) => <MovieCard movies={movie} addStars={this.handleIncStars} removeStars={this.handleDecStars} />)}
        </div>
        );
    }
}

export default MovieList ;