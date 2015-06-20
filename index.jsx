
'use strict'

let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;


// REACT COMPONENTS
let TweetSchedule                                     = require('./source/js/components/tweet-schedule');



// var BomMatrix                                      = require('./components/BomMatrix');
// var Account                                        = require('./components/Account');
// ROUTING
let Router                                            = require('react-router');
let {DefaultRoute, Link, Route, RouteHandler}         = Router;

// STORES

// GLOBALS
// window.API                                            = "http://private-1a4bb-bomexploder.apiary-mock.com/apiblueprint.org/";

// ACTIONS
let Actions = require('./source/js/actions/actions');

window.web_root = "/time-boxer/source/";

// The App component needs to go BEFORE the routes
let App = React.createClass({
  path: 'index',

  componentWillMount() {
    Actions.initializeAccounts();
  },

  render() {
    who.call(this);
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});


// The routes need to go AFTER the App
let routes = (
    <Route name="app"              path="/"                  handler={App}>
      <Route name="tweet-schedule" handler={TweetSchedule} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});