import React from 'react'

export default function Footer() {
    return (
        <section style={sectionStyle}>
            <h1 style={headerStyle}>Rancid</h1>
        </section>
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
    backgroundColor: '#fa5252'
}

const headerStyle = {
    fontFamily: 'Kaushan Script, cursive',
    fontSize: '30px',
    gridColumn: '2',
    alignSelf: 'center',
}