import React, { Component } from 'react'

export class Lists extends Component {
    render() {
        return (
            <section style={listSectionStyle}>
                <div style={firstDivStyle}>
                    <div style={listStyle}>
                        <ul>
                        </ul>
                    </div>
                </div>
                <div>
                    <div style={listStyle}>
                        <ul>
                        </ul>
                    </div>
                </div>
                <div>
                    <div style={listStyle}>
                        <ul>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

let firstDivStyle = {
    paddingTop: '15px'
}

let listSectionStyle = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr',
    justifyContent: 'center',
    alignContent: 'center',
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

export default Lists