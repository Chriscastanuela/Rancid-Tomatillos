import React, { Component } from 'react'
import ListSection from './ListSection';
import Movies from './Movies.jsx'

export default function Main(props) {
  return (
    <section className='MainSection' >
      <h1 className='CategoriesH'>Categories</h1>
      <ListSection user={props.user} isLoggedIn={props.isLoggedIn} theUpdater={props.theUpdater} updateUserLists={props.updateUserLists} userLists={props.userLists} userRatings={props.userRatings}/>
      <h1 className='PostersH'>Movie Details</h1>
      <Movies />
    </section>
  )
}