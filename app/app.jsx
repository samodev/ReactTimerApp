var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute, HashHistory} = require('react-router');
var Main = require('Main').default;

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style-loader!css-loader!sass-loader!applicationStyles')


let hashHistory = Router.hashHistory;

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
