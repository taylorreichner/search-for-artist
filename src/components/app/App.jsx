import React from 'react';
import SearchPage from '../../containers/SearchPage';
import {BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom';

export default function App() {
  return (
  <Router>
  <SearchPage />
  </Router>
  )}
