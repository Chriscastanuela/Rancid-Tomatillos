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
                    <h2 style={headerStyle}>{this.props.header}</h2>
                    <ul style={listStyle}>
                        {this.props.list.map(i => {
                            return  (
                                <span style={spanStyle}>
                                    {/* <p style={titleStyle}>{i.title} Rating: {Math.floor(i.average_rating)}</p> */}
                                    <h4 style={{margin: 3}}>{i.title}</h4>
                                    <p style={{margin: 3}}>Rating: {Math.floor(i.average_rating)}</p>
                                </span>
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
    borderRadius: '5%',
    height: '260px',
    width: '420px',
    overflowY: 'scroll',
    marginLeft: '10px',
    marginRight: '10px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    // gridTemplateRows: '.25fr 1fr',
    gridTemplateRows: '40',
    marginBottom: '20px',
    marginTop: '20px',
    boxShadow: '10px 15px 35px #888888',
    paddingBottom: '20px',
}

let headerStyle = {
    // fontFamily: 'Permanent Marker, cursive',
    margin: 0,
    justifySelf: 'center',
    alignSelf: 'center',
    fontFamily: 'Open Sans, sans-serif',
    gridColumn: 1,
    gridRow: 1
}

const spanStyle = {
    margin: 0,
    textAlign: 'left'
}

let header2Style = {
    gridColumn: 2,
    fontFamily: 'Open Sans, sans-serif',
}

let listStyle = {
    // listStyle: 'none',
    margin: 0,
    padding: 0,
    gridColumn: 1,
    gridRow: 2,
    marginLeft: '10px'
}

let titleStyle = {
    margin: 0,
    textAlign: 'left'
}

let liStyle2 = {
    margin: 0,
    textAlign: 'left',
    gridColumStart: 2,
    gridColumEnd: 2
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