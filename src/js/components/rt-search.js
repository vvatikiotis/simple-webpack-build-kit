'use strict';

import React from 'react';

const RTSearch = React.createClass({
    getInitialState: function() {
        return {searchString: ''};
    },
    render: function() {
        var searchString = this.state.searchString.trim().toLowerCase(),
            libs = searchString.length === 0 ? [] : libraries.filter(function(el) {
                return el.name.toLowerCase().match(searchString);
            }),
            found = libs.map(function(el) {
                return (
                    <li key={el.name}>
                        {el.name}
                    </li>
                    )
            }),
            styledFound =  searchString.length === 0 ? '' : <div className="panel panel-default">
                <ul className="list-unstyled">
                    {found}
                </ul>
                </div>

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Real-Time Search
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" 
                            onChange={this.onChange}
                            placeholder="Type here" />
                            {styledFound}
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    onChange: function(event) {
        this.setState({ searchString: event.target.value });
        //console.log(this.state.searchString);
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