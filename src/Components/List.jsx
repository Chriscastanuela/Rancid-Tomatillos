import React, { Component } from 'react'

export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
          list: props
        };
    }

    render() {
        return (
            <div style={listStyle}>
                {console.log(this.state.list)}
                <p>{this.props.list}</p>
            </div>
        )
    }
}

let listStyle = {
    margin: '15px',
    width: '300px',
    height: '300px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '25%',
    backgroundColor: '#f3eed9',
    boxShadow: '5px 10px 30px #888888'
}

export default List