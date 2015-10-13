import Axios from 'axios';

const base_url = 'http://api.themoviedb.org/3/search/movie',
    api_key = 'f70cf83328278845a342d573ac872756'
        

export default {
    search: function(query) {
        var clean_query = query.trim().toLowerCase(),
            req_url = `${base_url}?api_key=${api_key}&query=${clean_query}`;
        return Axios.get(req_url)
            .then(function(response) {
                return response.data;
            });
    }
};
