###React Router 

####General Notes  
- The use of React-Router in this demo is partly out of date. See the Andrew Mead demo for an alternative. See also the updated demo at https://github.com/coryhouse/react-flux-building-applications/tree/update/src. The approach take here is explained further at https://www.themarketingtechnologist.co/react-router-an-introduction/.  
- However, this demo includes some useful elements such as a notfoundpage and redirects  
- In Mead's model, the routing is done in three files. `app.jsx` both defines the routes (ie builds a routing component) and performs the core app render function. In other words, the whole app is rendered conditionally and the routing component is essentially a switch statement that filters what gets rendered. In `main.jsx` the top-level app UI is described, through which components are rendered by the router. So `app.jsx` gives us the abstract structure of the app, while `main.jsx` gives us the UI or visual structure. There is also a `Navigation.jsx` which is where routes are selected using `Link` and `IndexLink` elements.   
- In House's model, the routes are defined in a separate files `routes.js`. DefaultRoute is used instead of IndexRoute and name is used instead of path, but the structure is the same. In `main.js` a special `Router.run()` function is called with the routes component and the React `handler` element. The UI structure is defined in `app.js` and `RouteHandler` is used instead of `props.children` to display the routed components. In this model, the navigation UI is in `header.js` and uses html `a` elements instead of React-Router elements.   
- The structure of these methods is almost the same, but Mead's method is neater and more semantic.   

####Redirect   
- The `<Redirect>` element can be used to redirect from retired pages and handle typos. You can also use wildcards. See `routes.js`. 
- Redirects are also used in authentication (to a login page) and to prevent navigating away from an incomplete form. 

####Statics  
- The `statics` property can be used with two methods `willTransitionTo` and `willTransitionFrom` to manage routes. The first method is called when a route is clicked before the page transitions. The second method is triggered on a route when the user tries to navigate away. 
- See `routes.js`  

####Hash vs. History URLs  
- Hash (#) urls is the default in React-Router and supports older browsers 
- History URLs provide clean urls without #  
- To implement, add Router.HistoryLocation in `main.js`: `Router.run(routes, Router.HistoryLocation, function(Handler) { // React.render(<Handler />, document.getElementById('app')); //});`
- If using server-side rendering, we must use hash history.  
- history URLs must also be configured on the server so that React handles all the routing.

####Mixins 
- Mixins are used for functionality that cuts across components  
- We can add them to the mixin property of a React component  
- The navigation mixin from Router allows us to programmatically use and even create new routes    
