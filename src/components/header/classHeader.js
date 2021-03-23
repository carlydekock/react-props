import React from 'react';

class Header extends React.Component {

  // Props first some in here
  constructor(props) {
    super();
    this.state = props;
  }

  render() {
    return (
      <div>
        {/* We can still refer to props here on `this` */}
        {/* <h1>Class Component {this.state.title}</h1> */}
        <h1>Class Component {this.props.title}</h1>
      </div>
    )
  }
}

export default Header;
