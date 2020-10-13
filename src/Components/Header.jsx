import React, { Component } from 'react'
import userIcon from '../Assets/user.png'
import { NavLink, Route } from 'react-router-dom'

export class Header extends Component {

    render() {
        return (
            <section style={sectionStyle}>
                <NavLink style={headerStyle} to="">
                    <h1 className="Header" style={headerStyle}>Rancid Tomatillos</h1>
                </NavLink>
                <div className="UserNameAndIcon" style={userNameAndIconStyle}>
                    <img src={userIcon} alt="User Icon" style={userIconStyle}/>
                    <NavLink to="login" className="User" style={userStyle}>Login</NavLink>
                </div>
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
    // fontFamily: 'Kaushan Script, cursive',
    fontFamily: 'Permanent Marker, cursive',
    fontSize: '30px',
    gridColumn: '1',
    textAlign: 'left',
    alignSelf: 'center',
    marginLeft: '15px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
}

const userNameAndIconStyle = {
    // marginRight: '30%',
    textAlign: 'right',
    marginTop: '10px',
    marginRight: '35px',
    display: 'grid',
}

const userStyle = {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    fontSize: '20px',
    gridColumn: '2',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
}

const userIconStyle = {
    gridColumn: '2',
    width: '50px',
    height: '50px',
    justifySelf: 'right',
    // alignSelf: 'center',
}

export default Header