'use strict'
let $ = require('jquery');
let Firebase = require('firebase');
let uuid = require('node-uuid');

// Generate a v1 (time-based) id
// console.log(uuid.v4()); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'

let api = {
  accounts: [
    {
      name: "Ray's Pizza",
      campaigns: [
        "Two-Fer Tuesday",
        "Lunch Madness",
        "Rangers FTW"
      ]
    },
    {
      name: "Zach's Meteor Emporium",
      campaigns: [
        "Meteor Mondays",
        "Satellite Saturdays"
      ]
    },
    {
      name: "Juan's House of Horrors",
      campaigns: [
        "Hauntingly Good Deals",
        "Spooky Sales",
        "Frighful Fridays",
        "Spectral Saturdays"
      ]
    }
  ],

  shift_goals: [
    {
      shift_date: new Date(),
      shift_1: 10,
      shift_2: 15,
      shift_3: 35,
      shift_4: 10,
      shift_5: 30,
      shift_6: 0
    },
    {
      shift_date: new Date().addDays(1),
      shift_1: 5,
      shift_2: 20,
      shift_3: 20,
      shift_4: 0,
      shift_5: 0,
      shift_6: 0
    },
    {
      shift_date: new Date().addDays(2),
      shift_1: 30,
      shift_2: 65,
      shift_3: 50,
      shift_4: 50,
      shift_5: 75,
      shift_6: 15
    },
    {
      shift_date: new Date().addDays(3),
      shift_1: 0,
      shift_2: 0,
      shift_3: 0,
      shift_4: 0,
      shift_5: 0,
      shift_6: 0
    },
    {
      shift_date: new Date().addDays(4),
      shift_1: 0,
      shift_2: 0,
      shift_3: 0,
      shift_4: 0,
      shift_5: 0,
      shift_6: 0
    },
    {
      shift_date: new Date().addDays(5),
      shift_1: 0,
      shift_2: 0,
      shift_3: 0,
      shift_4: 0,
      shift_5: 0,
      shift_6: 0
    },
    {
      shift_date: new Date().addDays(6),
      shift_1: 0,
      shift_2: 0,
      shift_3: 0,
      shift_4: 0,
      shift_5: 0,
      shift_6: 0
    },
  ],

  initializeAccounts() {
    let accountsRef = new Firebase('https://shift-goals.firebaseIO.com');
  },

  getAccountNames() {
    let account_names = this.accounts.map(account => {
      return account.name;
    });
    return account_names;
  },

  getCampaignsForAccount(accountName) {
    let found_campaigns = null;
    let campaigns = this.accounts.map(account => {
      if (accountName === account.name) {
        return found_campaigns = account.campaigns;
      }
    });
    return found_campaigns;
  },

  getShiftGoals() {
    return this.shift_goals;
  },

  setShiftGoal(date, shiftNumber, newValue) {
    this.shift_goals.forEach((shift_goal, i) => {
      if (date === shift_goal.shift_date) {
        this.shift_goals[i]['shift_'+shiftNumber] = newValue;
      }
    });
    console.log(this.shift_goals);
  },

};

module.exports = api;