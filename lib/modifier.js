var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require("react");
var _ = require('lodash');

var Modifier = React.createClass({
  displayName: 'Modifier',

  propTypes: {
    onClick: React.PropTypes.func
  },

  render: function () {
    const otherProps = _.omit(this.props, ['hex', 'active']);
    return React.createElement('a', _extends({}, otherProps, { onClick: this.props.onClick, className: this.props.active ? "modifier active" : "modifier", style: { background: this.props.hex } }));
  }
});

module.exports = Modifier;