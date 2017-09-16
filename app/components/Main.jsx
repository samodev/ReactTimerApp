var React = require('react');
var Nav = require('Nav');

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="grid-x align-center">
          <div className="cell small-centered medium-6 large-4">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
