'use strict'
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants     = require('../constants/constants');
var api           = require('../api-utils/api-utils');
var $             = require('jquery');
var Firebase      = require('firebase');

var Actions = {

  initializeAccounts() {

  },

  setAccount(account_name) {
    AppDispatcher.handleViewAction(
      {
        actionType: Constants.SET_ACCOUNT_DO,
        data: {accountName: account_name}
      }
    );
  },

  setCampaign(campaign_name) {
    AppDispatcher.handleViewAction(
      {
        actionType: Constants.SET_CAMPAIGN_DO,
        data: {campaignName: campaign_name}
      }
    );
  },

  setShiftGoal(date, shiftNumber, newValue) {
    api.setShiftGoal(date, shiftNumber);
    AppDispatcher.handleViewAction(
      {
        actionType: Constants.SET_SHIFT_GOAL_DONE,
        data: {date: date, shiftNumber: shiftNumber, newValue: newValue}
      }
    );
  },

};

module.exports = Actions;