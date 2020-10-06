import React, { Component } from 'react'

export class Header extends Component {
    state = {
        username: "",
        profilePicture: ""
    }
    
    render() {
        return (
            <section style={sectionStyle}>
                <h1 className="Header" style={headerStyle}>Rancid Tomatillos</h1>
                <a className="Login">Login</a>
            </section>
        )
    }
}

const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr 1fr 1fr 1fr'
}

const headerStyle = {
    gridColumn: '1'
}

export default Header