import React, { Component } from 'react'
import Review from './Review.jsx'

export class ReviewSection extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  theUpdater = (state, newState) => {
    this.setState({[state]: newState});
  }

  componentDidMount() {
    this.setState({ reviews: this.props.list })
  }

  render() {
    return (
      <div>
        {this.state.reviews.map(i => {
          return <Review review={i} reviews={this.state.reviews} theUpdater={this.theUpdater()}/>
        })}
      </div>
    )
  }
}

export default ReviewSection
