"use strict"; 

var keyMirror = require('react/lib/keyMirror'); 

//keyMirror means object will be equivalent to CREATE_AUTHOR: CREATE_AUTHOR
module.exports = keyMirror({
    INITIALIZE: null,
    CREATE_AUTHOR: null, 
    UPDATE_AUTHOR: null   
}); 