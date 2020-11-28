import React from 'react'

export default function Footer() {
    return (
        <section style={sectionStyle}>
            <h1 style={headerStyle}>Rancid</h1>
        </section>
        //hello
        //hey there
    )
}

const sectionStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    borderStyle: 'solid',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    borderWidth: '1px',
    backgroundColor: '#fa5252',
    height: '80px',
    marginTop: '30px'
}

const headerStyle = {
    fontFamily: 'Permanent Marker, cursive',
    fontSize: '30px',
    gridColumn: '2',
    alignSelf: 'center',
    margin: 0
}