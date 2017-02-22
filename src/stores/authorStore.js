"use strict";

var Dispatcher = require('../dispatcher/appDispatcher'); 
var ActionTypes = require('../constants/actionTypes'); 
var EventEmitter = require('events').EventEmitter; 
var assign = require('object-assign'); //merges objects - included in ES6 
var _ = require('lodash'); 
var CHANGE_EVENT = 'change'; 

var _authors = []; 

//our store is an object which extends the EventEmitter (or has EventEmitter functionality)
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
    }, 

    getAllAuthors: function() {
      return _authors; //public func returns private data 
    }, 

    getAuthorById: function(id) {
      return _.find(_authors, {id: id}); 
    }
});

// Here, we catch actions dispatched from authorActions  
Dispatcher.register(function(action) {
  switch(action.actionTypes) {
    case ActionTypes.INITIALIZE: 
        _authors = action.initialData.authors; 
        AuthorStore.emitChange(); 
        break; 
    case ActionTypes.CREATE_AUTHOR:
        _authors.push(action.author); 
        AuthorStore.emitChange(); //notifies any components that have subscribed 
        break; 
    case ActionTypes.UPDATE_AUTHOR:
        var existingAuthor = _.find(_authors, {id: action.author.id});
        var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
        _authors.splice(existingAuthorIndex, 1, action.author); 
        AuthorStore.emitChange(); 
        break;
    default: 
    // no op
  }
});

module.exports = AuthorStore; 