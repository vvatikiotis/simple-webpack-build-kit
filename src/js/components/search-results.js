import React from 'react';
import Reflux from 'reflux';

import MovieStore from '../stores/movie-store';

export default React.createClass({
    mixins: [
        Reflux.listenTo(MovieStore, 'onChangeStore')
    ],
    getInitialState: function() {
        return { movies: [] }
    },
    render: function() {
        console.log('search results render');

        var movies = this.state.movies
        //if (movies.length === 0) return null;


        var styledMovies = movies.map(function(movie, index) {
            return (
                <li className="list-group-item" key={index}>
                    {movie}
                </li>
            );
        });
        return (
            <div className="list-group">
                {styledMovies}
            </div>
        );
    },
    onChangeStore: function(events, movies) {
        this.setState({ movies: movies });
    }
});