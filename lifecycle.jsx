var React = require('react')
var Velocity = require('velocity-animate')

require('velocity-animate/velocity.ui')

var Lifecycle = React.createClass({
  getInitialState() {
    return {
      value: 0
    }
  },
  componentDidMount() {
    this.refs.input.getDOMNode().focus()
  },
  componentDidUpdate() {
    if (this.state.value > 5) {
      Velocity(
        this.refs.input.getDOMNode(),
        'callout.tada'
      )
    }
  },
  onClick() {
    this.setState({
      value: this.state.value + 1
    })
  },
  render() {
    return (
      <div>
        <p>
          <input ref="input" type="text" value={this.state.value} />
        </p>
        <p>
          <button onClick={this.onClick}>
            Click Me!
          </button>
        </p>
      </div>
    )
  }
})

module.exports = Lifecycle
