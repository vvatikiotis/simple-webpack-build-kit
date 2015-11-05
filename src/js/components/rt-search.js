'use strict';

import React from 'react';
import Reflux from 'reflux';
import MovieStore from '../stores/movie-store';
import SearchResults from './search-results';
import Actions from '../actions';

const RTSearch = React.createClass({

    getInitialState: function() {
        return {
            searchString: ''
        };
    },
    render: function() {
        console.log('rt-results render');
        var searchString = this.state.searchString.trim().toLowerCase();

        if (this.state.searchString.length >= 3) {
            Actions.getMovies(this.state.searchString);
        } else {
            Actions.resetMovies();
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading RTSearch">
                    Real-Time Search
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" 
                            onChange={this.onChangeInput}
                            placeholder="Type here" />
                            <SearchResults></SearchResults>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    onChangeInput: function(event) {
        this.setState({ searchString: event.target.value });
    }
});


export default RTSearch;