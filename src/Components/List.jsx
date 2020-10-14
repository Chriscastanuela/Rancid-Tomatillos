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
                    <h3 style={{fontFamily: 'Permanent Marker, cursive', gridColumn: 1}}>{this.props.header}</h3>
                    <ul style={listStyle}>
                        {this.props.list.map(i => {
                            return  <li>{i.title} {Math.floor(i.average_rating)}</li>
                        })}
                    </ul>
                </div>
            )
        }
    }
}

let divStyle = {
    // minWidth: '305px',
    // width: '100%',
    // borderStyle: 'solid',
    // borderWidth: '1px',
    // borderRadius: '25%',
    // backgroundColor: '#f3eed9',
    // boxShadow: '5px 10px 30px #888888',
    minHeight: '322px',
    // padding: '10px',
    // alignSelf: 'center',
    // justifySelf: 'center',
    marginLeft: '10px',
    marginRight: '10px',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'grid',
    gridTemplateColumns: '1fr .5fr .5fr .5fr'
}

let listStyle = {
    listStyle: 'none',
    padding: '0',
    gridColumn: 1
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