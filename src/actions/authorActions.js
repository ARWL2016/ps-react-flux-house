"use strict"

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi'); 
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    //action creator
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author); 

        //Dispatcher, tell all the stores that a dispatcher was just created
        Dispatcher.dispatch({
            //action payload 
            actionType: ActionTypes.CREATE_AUTHOR, 
            author: newAuthor
        });
    }
}; 

module.exports = AuthorActions; 