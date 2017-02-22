"use strict"; 

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes'); 
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); //merges objects - included in ES6 
var CHANGE_EVENT = 'change'; 

var _authors = []; //the underscore indicates a private variable 

//our store's public API is an object which extends the EventEmitter (or has EventEmitter functionality)
//add and remove change listener allow components to tell stores that they want to be notified
var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback); 
    }, 

    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }, 

    emitChange: function() {
      this.emit(CHANGE_EVENT); 
    }
});

Dispatcher.register(function(action) {
  switch(action.actionTypes) {
    
  }
});