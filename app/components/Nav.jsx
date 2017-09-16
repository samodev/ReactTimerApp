var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li>
              <Link to="/" activeClassName="active-link">Timer</Link>
            </li>
            <li>
              <Link to="/" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created By <a href="https://github.com/samodev" target="_blank">Stéphane Amoudi</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
