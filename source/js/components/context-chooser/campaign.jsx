'use strict'
let React = require('react');
let {array, bool, func, number, object, string, node} = React.PropTypes;

// STORES
let Store = require('../../stores/store');
// ACTIONS
let Actions = require('../../actions/actions');
// REACT COMPONENTS


let Campaign = React.createClass({
path: 'context-chooser/campaign',

propTypes: {
  onCampaignSet: func.isRequired,
},

getInitialState() {
  return {ready: false};
},

getDefaultProps() {
  return {};
},

componentWillReceiveProps() {

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

SET_ACCOUNT_DONE(args) {
  this.setState({campaigns: Store.getCampaignsForAccount(args.accountName)})
  this.setState({ready: true});
},

chooseCampaign(e) {
  Actions.setCampaign(e.target.value);
},


render() {
  who.call(this);

  if (!this.state.ready) {return false};

  let options = this.state.campaigns.map((campaignName, i) => {
    return <option key={i} value={campaignName}>{campaignName}</option>
  });

  return (

    <form>
      <label htmlFor='campaign-selection'>Campaign </label>
      <select htmlFor='campaign-selection' onChange={this.chooseCampaign}>
        <option>Choose Campaign</option>
        {options}
      </select>
    </form>
  );
}
})

module.exports = Campaign;