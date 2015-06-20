'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
let Store = require('../../stores/store');
// ACTIONS
let Actions = require('../../actions/actions');
// REACT COMPONENTS

let Account = React.createClass({
  path: 'context-chooser/account',

  propTypes: {

  },

  getInitialState() {
    return {
      account_names: Store.getAccountNames(),
      chosen_account: null,
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

  chooseAccount(e) {
    Actions.setAccount(e.target.value);
  },

  render() {
    who.call(this);

    
    let options = this.state.account_names.map((account_name, i) => {
      return (
        <option key={i} value={account_name}>{account_name}</option>
      );
    });

    return (
      <div>
        <label htmlFor='account_selection' className=''>Account</label>
        <select id='account_selection' onChange={this.chooseAccount}>
          <option>Choose Account</option>
          {options}
        </select>
      </div>
    );
  }
})

module.exports = Account;