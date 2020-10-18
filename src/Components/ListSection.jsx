import React, { Component } from 'react'
import List from './List';


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
                // console.log(this.state);
            })
            .then(res => (
                this.props.theUpdater('movies', this.state.all)
            ))
        if (this.props.user.id) {
            fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${this.props.user.id}/ratings`)
                .then(response => response.json())
                .then(res => this.setState({userRatings: res.ratings}))
        }
    }

    getAList(theList, theKey) {
        let theArray = [];
        theList.forEach(index => {
            // console.table("ListSection -> getAList -> theArray", theArray)
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
                    <List isLoggedIn={this.props.isLoggedIn} header={'Your Ratings'} list={this.state.userRatings}/>
                    <List isLoggedIn={this.props.isLoggedIn} header={'New Releases'} list={this.state.recentMovies}/>
                    <List isLoggedIn={this.props.isLoggedIn} header={'Fan Favorites'} list={this.state.highestRated}/>
                    <List isLoggedIn={this.props.isLoggedIn} header={'Rancid Tomatillos'} list={this.state.lowestRated}/>
                    <List isLoggedIn={this.props.isLoggedIn} header={'All'} list={this.state.all}/>
                </section>
            )
        }
    }
}

export default ListSection

// let listSectionStyle = {
//     paddingLeft: '25px',
//     paddingRight: '25px',
//     borderRadius: '10%',
//     display: 'grid',
//     gridTemplateColumns: '1fr',
//     gridTemplateRows: '1fr',
//     height: '400px',
//     // width: '325px',
//     width: '100%',
//     overflowX: 'auto',
//     // backgroundColor: '#d1d7dc',
//     boxShadow: '10px 15px 35px #888888',
//     borderStyle: 'solid',
//     borderWidth: '2px',
//     justifyContent: 'center',
//     alignContent: 'center',
//     gridColumn: 1,
    // display: 'flex'
// }

// Promise.all([
//     .then(index => {
//         //
//     })
// ])

// Promise.all([
//     fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//     .then(response => response.json())
//     .then(response => {
//         this.setState({movieData: response.movies})
//         console.log(response)
//         console.log(this.state)
//     })
//     .catch(err => alert('Data failed to load. Try again later', err))
// ])
                                        // .then(promiseDotAllIndex => {
                                        //     console.log(this.state.movieData);
                                        //     this.getAList((
                                        //     this.state.movieData.sort((a,b) => {
                                        //         return b.release_date - a.release_date;
                                        //     })
                                        //     ), this.state.recentMovies);
    // this.getAList((
        // this.state.movieData.sort((a,b) => {
        //     return a.average_rating - b.average_rating;
        // })
        // ), this.state.lowestRated);
                                        // this.getAList((
                                        // this.state.movieData.sort((a,b) => {
                                        //     return b.average_rating - a.average_rating;
                                        // })
                                        // ), this.state.highestRated);
// })

// getAList(theList, theKey) {
//     console.log('I exist, am I before or after?')
//     let theTen = [];
//     theList.forEach(index => {
//         if (theTen.length < 10) {
//         theTen.push(index);
//         }
//     })
//     // this.setState({[[theKey]]: [...this.state[theKey], theTen]})
//     theKey = theTen;
//     console.log(this.state)
// }

// componentDidMount() {
//     this.state.recentMovies = [0];
//     console.log(this.state);
//     Promise.all([
//         fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
//         .then(response => response.json())
//         .then(res => {
//             let theMovies = res.movies;
//             let theTen = [];
//             theMovies.sort((a,b) => {
//                 return b.release_date - a.release_date;
//             }).forEach(index => {
//                 if (theTen.length < 10) {
//                     theTen.push(index);
//                 }
//             console.log(theTen);
//             this.state.recentMovies = theTen;
//             console.log(this.state);
//             })
//         })
//     ])
//     .then(index => {
//         this.state.recentMovies = [0];
//         console.log(this.state);
//     })
// }

    // <------------------------------------------------->didMount(), wasn't passing arrays to children  
    // componentDidMount() {
    //     Promise.all([
    //         fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    //         .then(response => response.json())
    //         .then(res => {
    //             let theMovies = res.movies;
    //             theMovies.sort((a,b) => {
    //                 return b.release_date - a.release_date;
    //             }).forEach(index => {
    //                 if (this.state.recentMovies.length < 10) {
    //                     this.state.recentMovies.push(index);
    //                 }
    //             console.log(this.state);
    //             })
    //         })
    //     ])
    //     .then(index => {
    //         // console.log("Hello");
    //         // this.state.recentMovies = 0;
    //         // console.log(this.state.recentMovies);
    //         // console.log("Hello");
    //     })
    // }

    // <------------------------------------------------->Individual list creation, before dynamic getAList()
    // let theTenRecents = [];
    // let theTenLowestRated = [];
    // let theTenHighestRated = [];
    // theMovies.sort((a,b) => {
    //     return b.release_date - a.release_date;
    // }).forEach(index => {
    //     if (theTenRecents.length < 10) {
    //         theTenRecents.push(index);
    //     }
    // this.setState({ recentMovies: theTenRecents })
    // })
    // theMovies.sort((a,b) => {
    //     return a.average_rating - b.average_rating;
    // }).forEach(index => {
    //     if (theTenLowestRated.length < 10) {
    //         theTenLowestRated.push(index);
    //     }
    // this.setState({ lowestRated: theTenLowestRated });
    // })