'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES

// ACTIONS
// let Actions = require('../../actions/Actions');
// REACT COMPONENTS
let Account = require('./account');
let Campaign = require('./campaign');

let ContextChooser = React.createClass({
  path: '',

  propTypes: {

  },

  getInitialState() {
    return {
    };
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {

  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  onCampaignSet() {

  },

  render() {
    return (
      <div>
        <Account />
        <Campaign onCampaignSet={this.onCampaignSet} />
      </div>
    );
  }
})

module.exports = ContextChooser;