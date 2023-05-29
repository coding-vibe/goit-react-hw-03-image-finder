import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import { Searchbar, SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled.js';

class SearchBar extends Component {
    state = {
        imageName: '',
    };

    handleNameChange = e => {
        this.setState({ imageName: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.imageName.trim() === '')
            return toast.error("Please, enter the name of the image")
            
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    };

    render() {
        return (
            <Searchbar className="searchbar">
                <SearchForm className="form" onSubmit={this.handleSubmit}>
                    <SearchFormBtn type='submit' className="button">
                        <span className="button-label"><ImSearch /></span>
                    </SearchFormBtn>
                    <SearchFormInput
                        className="input"
                        type='text'
                        name='imageName'
                        value={this.state.imageName}
                        onChange={this.handleNameChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Searchbar>
        );
    };
};

PropTypes.SearchBar = {
    onSubmit: PropTypes.func.isRequired,
}

export default SearchBar;