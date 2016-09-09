var React = require("react");
var _ = require('lodash');

var Modifier = React.createClass({
  propTypes: {
    onClick: React.PropTypes.func
  },
  
  render: function() {
    const otherProps = _.omit(this.props, ['hex', 'active']);
    return <a {...otherProps} onClick={this.props.onClick} className={this.props.active ? "modifier active" : "modifier"} style={{background: this.props.hex}}></a>;
  }
});

module.exports = Modifier;
