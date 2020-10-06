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
                <a className="Login" style={loginStyle}>Login</a>
            </section>
        )
    }
    
    formatUser() {
        const { username } = this.username;
        return (
        
        <p>{}</p>
        )
    }
}

const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
}

const headerStyle = {
    fontFamily: 'Kaushan Script, cursive',
    fontSize: '30px',
    gridColumn: '1',
    textAlign: 'left',
    marginLeft: '10%'
}

const loginStyle = {
    gridColumn: '2',
    textAlign: 'right',
    marginRight: '30%',
    alignSelf: 'center'
}

export default Header