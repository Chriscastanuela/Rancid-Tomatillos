import React from 'react';
import Header from './Header';
import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import '@testing-library/jest-dom';

describe('Header', () => {
   
  it('displays the h1 in the header', () => {
    render(<Router><Header /></Router>);
  
  let headerText = screen.getByText("Rancid Tomatillos");
  expect(headerText).toBeInTheDocument();
  });
})