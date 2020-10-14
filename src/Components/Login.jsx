import React from 'react';

export default function Login() {
    return (
        <section style={mainSectionStyle}>
            <div style={divStyle}>
                <input type="text" name="user" id="" placeholder='Username' style={inputStyle}/>
                <input type="text" name="password" id="" placeholder='Password' style={inputStyle}/>
                <button style={buttonStyle}>Login</button>
            </div>
        </section>
    )
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
    cursor: 'pointer'
}