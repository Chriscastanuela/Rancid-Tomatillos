import React, { Component } from 'react'
import List from '../List/List';
import ReviewSection from '../ReviewSection/ReviewSection';


export class ListSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
          recentMovies: [],
          lowestRated: [],
          highestRated: [],
          all: [],
          movieData: [],
          userRatings: [],
        };
    }

    componentDidMount() {
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then(response => response.json())
            .then(res => {
                let theMovies = res.movies;
                let newArr = theMovies.map(i => {
                    return i
                }).sort((a,b) => {
                    return a.title.localeCompare(b.title)
                });
                this.setState({all: newArr});
                this.getAList(theMovies.sort((a,b) => {
                    return b.release_date - a.release_date;
                }), 'recentMovies');
                this.getAList(theMovies.sort((a,b) => {
                    return a.average_rating - b.average_rating;
                }), 'lowestRated')
                this.getAList(theMovies.sort((a,b) => {
                    return b.average_rating - a.average_rating;
                }), 'highestRated')
            })
            .then(res => (
                this.props.theUpdater('movies', this.state.all),
                this.props.updateUserLists(this.state)
            ))
        if (this.props.user.id) {
            fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.user.id}/ratings`)
                .then(response => response.json())
                .then(res => this.setState({userRatings: [...res.ratings]}))
                .then(res => this.props.updateUserLists(this.state))
        }
    }

    getAList(theList, theKey) {
        let theArray = [];
        theList.forEach(index => {
            if (theArray.length < 10) {
                theArray.push(index);
            }
        this.setState({ [theKey]: theArray })
        })
    }
    
    render() {
        if (!this.state.movieData) {
            return <h1 style={{fontFamily: 'Permanent Marker, cursive',}}>Loading...</h1>
        } else {
            return (
                <section className='ListSection'>
                    <ReviewSection user={this.props.user} all={this.state.all} isLoggedIn={this.props.isLoggedIn} header={'Your Ratings'} reviews={this.state.userRatings} updateUserLists={this.props.updateUserLists} userLists={this.props.userLists} userRatings={this.props.userRatings}/>
                    <List isLoggedIn={this.props.isLoggedIn} header={'New Releases'} list={this.state.recentMovies}/>
                    <List isLoggedIn={this.props.isLoggedIn} header={'Fan Favorites'} list={this.state.highestRated}/>
                    <List isLoggedIn={this.props.isLoggedIn} header={'Lowest Rated'} list={this.state.lowestRated}/>
                    <List isLoggedIn={this.props.isLoggedIn} header={'All'} list={this.state.all}/>
                </section>
            )
        }
    }
}

export default ListSection