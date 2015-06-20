'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
// let Store = require('../../stores/Store');
// ACTIONS
let Actions = require('../../actions/actions');
// REACT COMPONENTS


let ShiftGoalElement = React.createClass({
  path: 'shift-goals/shift-goal-element',

  propTypes: {
    element_info: object.isRequired,
    shift_number: string.isRequired,
  },

  getInitialState() {
    return {
      editing: false,
      value: this.props.element_info['shift_' + this.props.shift_number],
    };
  },

  getDefaultProps() {
    return {

    };
  },

  componentWillMount() {
    
  },

  componentDidMount() {

  },

  componentDidUnmount() {

  },

  identify(e) {
    e.color = 'red';
  },

  edit() {
    this.setState({editing: !this.state.editing});
  },

  done(e) {
    Actions.setShiftGoal(this.props.element_info.shift_date, this.props.shift_number, this.state.value);
    this.setState({editing: !this.state.editing});
  },

  changeValue(e) {
    this.setState({value: e.target.value});
  },

  render() {
    let input_style = {
      width: 2 + 'em'
    }

    let contents = <span onClick={this.edit}>{this.state.value}</span>;
    if (this.state.editing) {
      contents = 
        <input 
          style={input_style} 
          type='text' 
          onChange={this.changeValue} 
          onBlur={this.done}
          value={this.state.value} />
    }
    return (
      <div>{contents}</div>
    );
  }
})

module.exports = ShiftGoalElement;