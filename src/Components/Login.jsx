import React from 'react';
import { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    sendLogin() {
        let thePost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: '', 
                    password: ''
                }
            )
        }
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies', thePost)
    }
    formUpdate(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (
            <section style={mainSectionStyle}>
                <div style={divStyle}>
                    <input type="text" name="email" id="" placeholder='Username' style={inputStyle} value={this.state.email} onChange={(e) => this.formUpdate(e)}/>
                    <input type="text" name="password" id="" placeholder='Password' style={inputStyle} value={this.state.password} onChange={(e) => this.formUpdate(e)}/>
                    <button style={buttonStyle}>Login</button>
                </div>
            </section>
        )
    }
}

let mainSectionStyle = {
    display: 'grid',
    gridTemplateRows: '1fr',
    gridGap: '10px',
    alignContent: 'center',
    justifyContent: 'center',
}

let inputStyle = {
    fontFamily: 'Open Sans, sans-serif',
}

let divStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5%',
    height: '260px',
    width: '420px',
    overflowY: 'scroll',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '40',
    marginBottom: '20px',
    marginTop: '20px',
    boxShadow: '10px 15px 35px #888888',
    paddingBottom: '20px',
    placeSelf: 'center'
}

let buttonStyle = {
    cursor: 'pointer',
    fontFamily: 'Open Sans, sans-serif',
}