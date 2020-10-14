import React, { Component } from 'react';

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: [],
          header: ''
        };
    }

    render() {
        if (!this.props.list[9]) {
            return (
                <div style={divStyle}>
                </div>
            )
        } else {
            return (
                <div style={divStyle}>
                    <h3 style={headerStyle}>{this.props.header}</h3>
                    <ul style={listStyle}>
                        {this.props.list.map(i => {
                            return  (
                                <p style={liStyle}>{i.title} {Math.floor(i.average_rating)}</p>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }
}

let divStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '10%',
    minHeight: '322px',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr .5fr .5fr',
    gridTemplateRows: '.25fr 1fr',
    marginBottom: '20px',
    boxShadow: '10px 15px 35px #888888',
}

let headerStyle = {
    margin: 0,
    // fontFamily: 'Permanent Marker, cursive',
    justifySelf: 'center',
    alignSelf: 'center',
    fontFamily: 'Open Sans, sans-serif',
    gridColumn: 1,
    gridRow: 1
}

let listStyle = {
    listStyle: 'none',
    margin: 0,
    // // marginBottom: '13px',
    padding: 0,
    gridColumn: 1,
    gridRow: 2
}

let liStyle = {
    margin: 0,
    textAlign: 'left'
}

export default List

// componentDidMount() {
//     let theArray = [];
//     this.props.list.forEach(i => {
//         theArray.push(i);
//     })
//     this.setState({list: theArray});
//     this.setState({header: this.props.header});
//     console.log(this.state);
// }

// componentDidMount() {
        // let theArray = [];
        // this.props.list.map(i => {
        //     theArray.push(i);
        // })
        // this.setState({list: theArray});
    //     this.setState({header: this.props.header});
    //     console.log(this.state);
    // }

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