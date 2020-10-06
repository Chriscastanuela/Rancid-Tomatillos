import React, { Component } from 'react'

export class Header extends Component {

    render() {
        return (
            <section style={sectionStyle}>
                <h1 className="Header" style={headerStyle}>Rancid Tomatillos</h1>
                <a className="User" style={userStyle}>User</a>
            </section>
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

const userStyle = {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '20px',
    gridColumn: '2',
    textAlign: 'right',
    marginRight: '30%',
    alignSelf: 'center',
    cursor: 'pointer'
}

export default Header