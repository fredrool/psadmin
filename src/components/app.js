/* eslint-disable strict */ // Disabled for global var required by jQuery

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        // var Child;

        // switch(this.props.route) {
        //     case 'about': Child = About; break;
        //     case 'authors': Child = Authors; break;
        //     default: Child = Home;
        // };

        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
                {/*<Child />*/}
            </div>
        );
    }
});

module.exports = App;
