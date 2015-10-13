'use strict';

import React from 'react';
import RTSearch from './components/rt-search';

const App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <RTSearch></RTSearch>
            </div>
        );
    }
});

export default App;