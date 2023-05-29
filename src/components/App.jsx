import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';
import { AppWrap } from './App.styled.js';

class App extends Component {
  state = {
    imageName: '',
  };
  
  handleSearchBarSubmit = imageName => {
    this.setState({ imageName });
  }
  
  render() {
    return (
      <AppWrap>
        <SearchBar onSubmit={this.handleSearchBarSubmit} />
        <ImageGallery imageName={this.state.imageName} />
      </AppWrap>
    );
  }
}

export default App;