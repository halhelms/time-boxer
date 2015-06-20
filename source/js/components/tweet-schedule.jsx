'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES

// ACTIONS
// let Actions = require('../../actions/Actions');
// REACT COMPONENTS
let ContextChooser = require('./context-chooser/index');
let ShiftGoals = require('./shift-goals/index');

let TweetSchedule = React.createClass({
    path: 'components/tweet-schedule',

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

    render() {
      who.call(this);
      return (
        <div>
          <ContextChooser />
          <ShiftGoals />
        </div>
      );
    }
})

module.exports = TweetSchedule;