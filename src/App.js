import React, { Component } from 'react';

import Feed from './components/Feed';
import SearchBar from './components/SearchBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Feed />
      </div>
    );
  }
}

export default App;
