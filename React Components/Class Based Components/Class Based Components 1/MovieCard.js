import React from 'react';

class MovieCard extends React.Component {
    constructor() {
        super() ;
        this.state = {
            title: "The Avengers!",
            plot: "Power Rangers",
            price: 199,
            rating: 9.1,
            stars: 0,
        }
        //this.addStars = this.addStars.bind(this) ;
        //this.removeStars = this.removeStars.bind(this) ;
    }
    
    //Event Handling
    //If we are not using arrow function then we have to bind the function in the constructor(Commented code in the constructor) or while using this function in the onClick event.
    addStars = () => {
        if(this.state.stars === 5) {
            return ;
        }
        //this.state.stars = this.state.stars + 1 ;

        //Method 1 for updating the state.
        // this.setState({
        //     stars: this.state.stars + 0.5 
        // })

        //Method 2 for updating the state.
        //It take previous state as an argument and return the new state.
        this.setState((prevState) => {
            return {
                stars: prevState.stars + 0.5 
            }
        })

        //When to use which method?
        //If we are updating the state based on the previous state then we should use the second method(Like counter/Stars). Previous State Matter.
        //If we are updating the state directly then we can use the first method.(Like title of movie, plot of movie). Previous State not even Matter.
    }

    //If we are not using arrow function then we have to bind the function in the constructor(Commented code in the constructor) or while using this function in the onClick event.
    removeStars = () => {
        if(this.state.stars === 0) {
            return ;
        }

        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5 
            }
        }, () => {
            console.log("Inside SetState call." + this.state.stars);
        })
        
        //Asynchronous nature of setState.
        //SetState is an async function.We dont know when it will update the state due to async nature.
        // If we want to check we can give a callback function to the setState like we dont just above.
        //While decreasing the stars we are checking the value of stars after updating the state.
        //If we dont give the callback function then we will get the previous value of stars in console.log.
        console.log(this.state.stars);

        //Batching in SetState.
        //If we are calling the setState multiple times then it will batch the calls and update the state only once.
        //If we are calling the setState multiple times and we want to update the state based on the previous state then we should use the second method of setState.
        //If we are calling the setState multiple times and we want to update the state directly then we should use the first method of setState.
        this.setState({
            stars: this.state.stars - 0.5
        })
        this.setState({
            stars: this.state.stars - 1
        })
        this.setState({
            stars: this.state.stars - 1.5
        })
        this.setState({
            stars: this.state.stars - 2
        })
        //All the above 4 call are batched together and only last call will be used to update the content 
        // and re-rendering occur only once.
        // Means state will be decreased by 2 and re-rendering occur.

        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5 
            }
        })
        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5 
            }
        })
        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5 
            }
        })
        this.setState((prevState) => {
            return {
                stars: prevState.stars - 0.5 
            }
        })
        //Here all the calls are considered and updated the state based on the previous state and re-rendering occur only once.
        // Means state will be decreased by 2(0.5 + 0.5 + 0.5 + 0.5) and re-rendering occur.
    }
    
    render() {
        //Destructuring of Object in JavaScript
        const {title, plot, price, rating, stars} = this.state;

        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt="Poster" src="https://m.media-amazon.com/images/I/71Rm8RgpemL._SY606_.jpg"/>
                    </div>
                    <div className='right'>
                        <div className='title'>{this.state.title}</div>
                        <div className='plot'>{this.state.plot}</div>
                        <div className='price'>Rs. {price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img className='str-btn' alt='decrease' src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" onClick={this.removeStars}></img>
                                <img className="stars" alt='stars' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'></img>
                                <img className='str-btn' alt='increase' src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={this.addStars}></img>
                                <span>{stars}</span>
                            </div>
                            <button className='favourite-btn'>favourite</button>
                            <button className='cart-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;