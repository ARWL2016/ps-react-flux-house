"use strict";

var React = require('react'); 
var Router = require('react-router'); 
var routes = require('./routes'); 
var InitializeActions = require('./actions/initializeActions'); 

// Router.run(routes, Router.HistoryLocation, function(Handler) {
//     React.render(<Handler />, document.getElementById('app')); 
// });

InitializeActions.initApp(); 

Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById('app')); 
});





