import React from 'react'

export default function Footer() {
    return (
        <section>
            <h1 style={sectionStyle}>Rancid</h1>
        </section>
    )
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