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
    gridTemplateColumns: '1fr 1fr',
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderWidth: '1px',
    backgroundColor: '#fa5252'
}

const headerStyle = {
    fontFamily: 'Kaushan Script, cursive',
    fontSize: '30px',
    gridColumn: '1',
    textAlign: 'left',
    marginLeft: '10%'
}

const loginStyle = {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '20px',
    gridColumn: '2',
    textAlign: 'right',
    marginRight: '30%',
    alignSelf: 'center'
}

export default Header