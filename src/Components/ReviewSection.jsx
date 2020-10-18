import React, { Component } from 'react'
import Review from './Review.jsx'

export class ReviewSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  theUpdater = (state, newState) => {
    this.setState({[state]: newState});
  }

  render() {
    console.log(this.props)
    if (!this.props.isLoggedIn) {
      return(
        <div style={divStyle}>
        <h2 style={headerStyle}>{this.props.header}</h2>
        <p>Log in if you would like to see your ratings.</p>
      </div>
      )
    } else {
      return(
        <div style={divStyle}>
        <h2 style={headerStyle}>{this.props.header}</h2>
        <Review reviews={this.props.list} theUpdater={this.theUpdater} all={this.props.all}/>
      </div>
      )
    }
  }
}

let divStyle = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '5%',
  height: '260px',
  width: '420px',
  overflowY: 'scroll',
  marginLeft: '10px',
  marginRight: '10px',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '40',
  marginBottom: '20px',
  marginTop: '20px',
  boxShadow: '10px 15px 35px #888888',
  paddingBottom: '20px',
  backgroundColor: '#F3EED9'
}

let headerStyle = {
  margin: 5,
  justifySelf: 'center',
  alignSelf: 'center',
  fontFamily: 'Open Sans, sans-serif',
  gridColumn: 1,
  gridRow: 1
}

export default ReviewSection
