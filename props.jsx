var React = require('react')

var Hello = React.createClass({
  render() {
    return <div>Hello, {this.props.name}</div>
  }
})

var Props = React.createClass({
  render() {
    return <Hello name="you" />
  }
})

module.exports = Props
