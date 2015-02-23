var React = require('react')

var Refs = React.createClass({
  getInitialState() {
    return {
      buttonText: "Click Me!"
    }
  },
  onClick() {
    this.setState({
      buttonText: this.refs.input.getDOMNode().value
    })
  },
  render() {
    return (
      <div>
        <p>
          <input ref="input" type="text" />
        </p>
        <p>
          <button onClick={this.onClick}>
            {this.state.buttonText}
          </button>
        </p>
      </div>
    )
  }
})

module.exports = Refs
