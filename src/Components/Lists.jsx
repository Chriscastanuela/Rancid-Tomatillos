import React, { Component } from 'react'

export class Lists extends Component {
    render() {
        return (
            <section style={listSectionStyle}>
                <div></div>
                <div></div>
                <div></div>
            </section>
        )
    }
}

let listSectionStyle = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr 1fr'
}

export default Lists