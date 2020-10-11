import React, { Component } from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: []
        };
    }

    render() {
        // {console.log(this.props.list)};
        // {console.log(this.state)};
        if (!this.state.list) {
            return (
                <h1 style={{fontFamily: 'Kaushan Script, cursive'}}>Loading Data</h1>
            )
        } else {
            return (
                <div style={listStyle}>
                    {console.log(this.state.list)}
                    {this.state.list.map(i => {
                        return <p>{i.title}</p>
                    })}
                    {/* <p>{this.state.list}</p> */}
                </div>
            )
        }
    }

    componentDidMount() {
        {console.log(this.props)};
        this.setState({ list: this.props.list });
        {console.log('asfdafsdfsafdfsda', this.state.list)}
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => response.json())
        .then(res => {
            let theMovies = res.movies;
            let theTen = [];
            theMovies.sort((a,b) => {
                return b.release_date - a.release_date;
            }).forEach(index => {
                if (theTen.length < 10) {
                    theTen.push(index);
                    console.log(theTen);
                }
            this.setState({ list: theTen })
            console.log(this.state);
            // console.log(this.state.recentMovies[0].title);
            })
        })
    }
}

let listStyle = {
    margin: '15px',
    width: '300px',
    // height: '300px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '25%',
    backgroundColor: '#f3eed9',
    boxShadow: '5px 10px 30px #888888'
}

export default List