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

  componentDidMount() {
    // this.setState({ reviews: this.props.list })
  }

  render() {
    console.log(this.props)
    if (!this.props.isLoggedIn && !this.props.list) {
      return(
        <div style={divStyle}>
        <h2 style={headerStyle}>{this.props.header}</h2>
        <p>You suk</p>
      </div>
      )
    } else {
      return(
        <div style={divStyle}>
        <h2 style={headerStyle}>{this.props.header}</h2>
        {this.props.list.map(i => {
          return <Review review={i} theUpdater={this.theUpdater}/>
        })} 
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

const spanStyle = {
  margin: 0,
  textAlign: 'left',
}

let listStyle = {
  margin: 0,
  padding: 0,
  gridColumn: 1,
  gridRow: 2,
  marginLeft: '10px'
}

let ratingStyle = {
  margin: 3,
}

export default ReviewSection
