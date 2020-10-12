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
                <h1 style={{fontFamily: 'Kaushan Script, cursive'}}>Loading...</h1>
            )
        } else {
            return (
                <div style={divStyle}>
                    <h1 style={{fontFamily: 'Kaushan Script, cursive'}}>{this.props.header}</h1>
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
    margin: '15px',
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: '260px',
    maxWidth: '330px',
    height: '350px',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '10px',
    borderRadius: '25%',
    backgroundColor: '#f3eed9',
    boxShadow: '5px 10px 30px #888888',
}

let listStyle = {
    listStyle: 'none',
    padding: '0'
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