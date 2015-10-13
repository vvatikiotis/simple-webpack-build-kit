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
                <div className="panel-heading">
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

var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];


export default RTSearch;