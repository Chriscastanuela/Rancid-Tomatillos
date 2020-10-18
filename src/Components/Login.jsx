import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            failedLogin: '',
        }
    }
    //name: 'Claire', email: 'claire@turing.io', password: 'qwer1234'
    sendLogin() {
        let thePost = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    email: this.state.email,
                    password: this.state.password,
                }
            )
        }
        fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', thePost)
            .then(res => res.json())
            .then(res => {
                if (res.user) {
                    this.props.theUpdater('user', res.user, console.log(res.user));
                    this.props.theUpdater('isLoggedIn', true);
                } else {
                    this.setState({failedLogin: 'Username or password incorrect'})
                }
            })
            .catch(err => console.log(err))
    }
    formUpdate(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        if (!this.props.isLoggedIn) {
            return (
                <section style={mainSectionStyle}>
                    {console.log(this.props)}
                    <div style={divStyle}>
                        <input type="text" name="email" id="" placeholder='Username' style={inputStyle} value={this.state.email} onChange={(e) => this.formUpdate(e)} autocomplete="off"/>
                        <input type="password" name="password" id="" placeholder='Password' style={inputStyle} value={this.state.password} onChange={(e) => this.formUpdate(e)} autocomplete="off"/>
                        <button style={buttonStyle} onClick={() => this.sendLogin()}>Login</button>
                        <p>{this.state.failedLogin}</p>
                    </div>
                </section>
            )
        } else {
            return (
                <Redirect to='/'/>
            )
        }
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
    fontFamily: 'Permanent Marker, cursive',
    marginTop: '2%',
    width: '200px',
    height: '40px',
    placeSelf: 'center'
}

let divStyle = {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderRadius: '5%',
    height: '260px',
    width: '320px',
    overflowY: 'scroll',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '40',
    marginBottom: '210px',
    marginTop: '20px',
    boxShadow: '10px 15px 35px #888888',
    paddingBottom: '20px',
    placeSelf: 'center',
    backgroundColor: '#F3EED9'
}

let buttonStyle = {
    cursor: 'pointer',
    fontFamily: 'Open Sans, sans-serif',
    // fontFamily: 'Permanent Marker, cursive',
    width: '150px',
    height: '40px',
    placeSelf: 'center',
    borderRadius: '5%',
}