import Api from '../utils/api';
import Reflux from 'reflux';
import Actions from '../actions';

export default Reflux.createStore({
    listenables: [Actions],
    getMovies: function(query) {
        return Api.search(query)
            .then(function(data) {
                this.movies = data.results.map( (el) => { return el.original_title });  // moviedb response API
                this.triggerChange();
            }.bind(this));
     },
     resetMovies: function() {
        if (this.movies && this.movies.length !== 0) {
            this.movies = [];
            this.triggerChange();            
        }
     },
     triggerChange: function() {
        this.trigger('change', this.movies);
     }
})