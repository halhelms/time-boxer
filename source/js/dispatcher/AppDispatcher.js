// var Dispatcher = require('../flux/lib/Dispatcher');
var Dispatcher = require('flux').Dispatcher;
var assign     = require('object-assign');

module.exports = assign(new Dispatcher(), {
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  },

  handleServerAction: function(action) {
    this.dispatch({
      source: 'SERVER_ACTION',
      action: action
    });
  },
});