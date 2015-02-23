var React = require('react')

var Hello = React.createClass({
  getInitialState() {
    return {
      name: "world"
    }
  },
  onChange(e) {
    this.setState({
      name: e.target.value
    })
  },
  render() {
    return (
      <div>
        Hello, {this.state.name}<br />
        <input type="text" onChange={this.onChange} />
      </div>
    )
  }
})

var State = React.createClass({
  render() {
    return <Hello />
  }
})

module.exports = State
