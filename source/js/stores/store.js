'use strict'
let AppDispatcher           = require('../dispatcher/AppDispatcher');
let EventEmitter            = require('events').EventEmitter;
let assign                  = require('../../../node_modules/object-assign');
EventEmitter.prototype.vars = {};

let Constants               = require('../constants/constants');

let CHANGE_EVENT            = 'CHANGE';
let api                     = require('../api-utils/api-utils');

let Store = assign({}, EventEmitter.prototype, {

  state: {

  },

  getState() {
    return this.state;
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback );
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  setState(obj) {
    assign(this.state, obj);
  },

  notify(obj) {
    this.emit(CHANGE_EVENT, obj);
  },

  getAccountNames() {
    return api.getAccountNames();
  },

  getCampaignsForAccount(accountName) {
    return api.getCampaignsForAccount(accountName);
  },

  getShiftGoals() {
    return api.getShiftGoals();
  },


});

// Register for Actions

AppDispatcher.register(function(payload){
  switch (payload.action.actionType) {
    case Constants.SET_ACCOUNT_DO:
      payload.action.data.subsequent_action = Constants.SET_ACCOUNT_DONE;
      Store.setState({action_data: payload.action.data});
      Store.notify(payload.action.data);
      break;

    case Constants.SET_CAMPAIGN_DO:
      payload.action.data.subsequent_action = Constants.SET_CAMPAIGN_DONE;
      Store.setState({action_data: payload.action.data});
      Store.notify(payload.action.data);
      break;

    case Constants.SET_SHIFT_GOAL_DONE:
      payload.action.data.subsequent_action = Constants.SET_SHIFT_GOAL_DONE;
      Store.setState({action_data: payload.action.data});
      Store.notify(payload.action.data);
  }
});

module.exports = Store;
