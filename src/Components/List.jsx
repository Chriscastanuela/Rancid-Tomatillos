import React, { Component } from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: []
        };
    }

    render() {
        if (!this.props.list) {
            return (
                <h1 style={{fontFamily: 'Kaushan Script, cursive'}}>Loading...</h1>
            )
        } else {
            return (
                <ul style={listStyle}>
                    {console.log(this.props.list)}
                    {this.props.list.map(i => {
                        return <li>{i.title}</li>
                    })}
                </ul>
            )
        }
    }
}

let listStyle = {
    margin: '15px',
    minWidth: '300px',
    minHeight: '350px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '25%',
    backgroundColor: '#f3eed9',
    boxShadow: '5px 10px 30px #888888',
    listStyle: 'none'
}

export default List

// componentDidMount() {
    //     {console.log(this.props)};
    //     this.setState({ list: this.props.list });
    //     {console.log('asfdafsdfsafdfsda', this.state.list)}
    //     fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    //     .then(response => response.json())
    //     .then(res => {
    //         let theMovies = res.movies;
    //         let theTen = [];
    //         theMovies.sort((a,b) => {
    //             return b.release_date - a.release_date;
    //         }).forEach(index => {
    //             if (theTen.length < 10) {
    //                 theTen.push(index);
    //                 console.log(theTen);
    //             }
    //         this.setState({ list: theTen })
    //         console.log(this.state);
    //         })
    //     })
    // }