import React, { Component } from 'react'
import Review from './Review.jsx'

export class ReviewSection extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  render() {
    return (
      <div>
        {this.state.reviews.map(i => {
          return <Review review={i}/>
        })}
      </div>
    )
  }
}

export default ReviewSection
