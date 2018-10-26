import React, { Component } from 'react';

// functional component
/* const SearchBar = () => {
    return <input />  // React.createElement
} */

// class component state and props
class SearchBar extends Component {
    constructor(props) {
        super(props); //wierd thing 

        this.state = { term: '' };
    }

    render() {
        //return <input onChange={this.handelInputChange} />
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={event => this.handelInputChange(event.target.value)} />
            </div>
        );
    }

    handelInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

// new SearchBar; instance of class

export default SearchBar;