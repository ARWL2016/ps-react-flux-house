/*eslint-disable strict */ //global vars needed

var React = require('react'); 
var Header = require('./common/header'); 
var RouteHandler = require('react-router').RouteHandler; 
$ = jQuery = require('jquery'); //sets both to jquery, this will make jQuery available globally, as Bootstrap expects"

var App = React.createClass({
    render: function() {
        return (
            <div> 
                <Header /> 
                <div className="container-fluid">
                    <RouteHandler /> 
                </div>
            </div> 
        );
    }
});

module.exports = App;