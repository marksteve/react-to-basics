var React = require('react')
var Router = require('react-router')

var {
  Route,
  DefaultRoute,
  RouteHandler
} = Router

var routes = (
  <Route name="root" path="/" handler={require('./root')}>
    <DefaultRoute handler={require('./hello')} />
    <Route name="props" handler={require('./props')} />
    <Route name="state" handler={require('./state')} />
    <Route name="refs" handler={require('./refs')} />
    <Route name="lifecycle" handler={require('./lifecycle')} />
  </Route>
)

var router = Router.create({
  routes: routes
})

router.run((Handler) => {
  React.render(
    <Handler />,
    document.body
  )
})
