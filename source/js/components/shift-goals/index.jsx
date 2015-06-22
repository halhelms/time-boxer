'use strict'
let React                                             = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
let Store                                             = require('../../stores/store');
// ACTIONS
// let Actions                                        = require('../../actions/Actions');
// REACT COMPONENTS
let ShiftGoalElement                                  = require('./shift-goal-element');

let ShiftGoals = React.createClass({
  path: 'goals/index',

  propTypes: {

  },

  getInitialState() {
    return {
      shift_goals: null,
    };
  },

  getDefaultProps() {
    return {};
  },

  componentWillMount() {
    
  },

  componentDidMount() {
    Store.addChangeListener(this.onStoreChange);
  },

  componentDidUnmount() {

  },

  onStoreChange(args) {
    try{this[args.subsequent_action](args)} catch(e){};
  },

  SET_CAMPAIGN_DONE(args) {
    try{this.setState({shift_goals: Store.getShiftGoals()})} catch(e){};
  },

  render() {
    who.call(this);

    if (!this.state.shift_goals) { return false };

    let td_style = {
      width: (100/9) + '%',
    };

    let date_options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    };

    let date_headers = this.state.shift_goals.map((shift_info, i) => {
      return <td key={i} style={td_style}>{shift_info.shift_date.toLocaleDateString('en-US', date_options)}</td>;
    });

    let shift_1 = ((0).to(6)).map(num => {
      return (<td key={num}><ShiftGoalElement shift_number='1' element_info={this.state.shift_goals[num]} /></td>);
    });

    let shift_2 = ((0).to(6)).map(num => {
      return (<td key={num}><ShiftGoalElement shift_number='2' element_info={this.state.shift_goals[num]} /></td>);
    });

    let shift_3 = ((0).to(6)).map(num => {
      return (<td key={num}><ShiftGoalElement shift_number='3' element_info={this.state.shift_goals[num]} /></td>);
    });

    let shift_4 = ((0).to(6)).map(num => {
      return (<td key={num}><ShiftGoalElement shift_number='4' element_info={this.state.shift_goals[num]} /></td>);
    });

    let shift_5 = ((0).to(6)).map(num => {
      return (<td key={num}><ShiftGoalElement shift_number='5' element_info={this.state.shift_goals[num]} /></td>);
    });

    let shift_6 = ((0).to(6)).map(num => {
      return (<td key={num}><ShiftGoalElement shift_number='6' element_info={this.state.shift_goals[num]} /></td>);
    });
    
    return (
      <table className='table'>
        <thead></thead>
        <tbody>
          <tr>
            <td />{date_headers}<td />
          </tr>
          <tr>
            <td>6.00 - 9.00</td>
            {shift_1}
          </tr>
          <tr>
            <td>9.00 - 12.00</td>
            {shift_2}
          </tr>
          <tr>
            <td>12.00 - 3.00</td>
            {shift_3}
          </tr>
          <tr>
            <td>3.00 - 6.00</td>
            {shift_4}
          </tr>
          <tr>
            <td>6.00 - 9.00</td>
            {shift_5}
          </tr>
          <tr>
            <td>9.00 - midnight</td>
            {shift_6}
          </tr>
          
        </tbody>
      </table>
    );
  }
})

module.exports = ShiftGoals;