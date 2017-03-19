'use strict';
// $ = jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, /*Router.HistoryLocation,*/ function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

// var Home = require('./components/homePage');
// var Authors = require('./components/authors/authorsPage');
// var About = require('./components/about/aboutPage');

// (function(win) {
//     'use strict';

    // function render() {
    //     var route = win.location.hash.substr(1);
    //     React.render(<App route={route} />, document.getElementById('app'));
    // }

    // win.addEventListener('hashchange', render);
    // render();

    // var App = console.log('Hello World from Browserify');
    // module.exports = App;

    // React.render(<Home />, document.getElementById('app'));
// })(window);
