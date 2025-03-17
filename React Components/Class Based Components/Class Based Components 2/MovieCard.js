import React from 'react';

class MovieCard extends React.Component {

    //As we are going to use the concept of props so we don't need the constructor and state here.
    //We will get the props from the parent component and we will use it here.
    //We will move this constructor to the parent component and pass the props to this component.

    // constructor() {
    //     super() ;
    //     this.state = {
    //         title: "The Avengers!",
    //         plot: "Power Rangers",
    //         price: 199,
    //         rating: 9.1,
    //         stars: 0,
    //         fav: false //Used for the purpose of conditional rendering on the basis of favourite or not.
    //     }
    // }
    

    //As we are moving one step above. So the rating, stars etc are defined in the parent component and passed to this component as props.
    //So there event handlers are also required to be passed to the above component.
    // addStars = () => {
    //     if(this.state.stars === 5) {
    //         return ;
    //     }
        
    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars + 0.5
    //         }
    //     })
    // }

    // removeStars = () => {
    //     if(this.state.stars === 0) {
    //         return ;
    //     }

    //     this.setState((prevState) => {
    //         return {
    //             stars: prevState.stars - 0.5 
    //         }
    //     }, () => {
    //         console.log("Inside SetState call." + this.state.stars);
    //     })
    // }
    
    // handleFav = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     })
    // }
    
    render() {
        //Destructuring of Object in JavaScript

        //If we use the method 1 of passing props then we have to use this.
        //const {title, plot, price, rating, stars, fav} = this.props;

        //If we use the method 2 of passing props then we have to use this.
        const {title, plot, price, rating, stars, fav} = this.props.movies;

        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt="Poster" src="https://m.media-amazon.com/images/I/71Rm8RgpemL._SY606_.jpg"/>
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>

                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img className='str-btn' alt='decrease' src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" onClick={() => this.props.removeStars(this.props.movies)}></img>
                                <img className="stars" alt='stars' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'></img>
                                {/*Remember using arrow function while using event handler bcus if we dont call it is will keep on increasing even without clicking the button*/}
                                <img className='str-btn' alt='increase' src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={() => this.props.addStars(this.props.movies)}></img>
                                <span>{stars}</span>
                            </div>

                            
                            {/*This is the concept of Conditional Rendering. We can also apply it on single button by applying condition on class name and name of button*/
                            fav ? <button className='unfavourite-btn' onClick={this.handleFav}>Un-Favourite</button> 
                                : <button className='favourite-btn' onClick={this.handleFav}>favourite</button>
                            }

                            <button className='cart-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;