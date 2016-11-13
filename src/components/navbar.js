import React, { Component } from 'react';
import { Link } from 'react-router';

// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };
  }

  render() {
    return (
      <div id="navbar">
        <div>
          <Link to="/">home</Link>
        </div>
        <div>
          <Link to="/posts/new">add meal</Link>
        </div>
        <div>
          <Link to="/stats">my stats</Link>
        </div>
        <div>
          <Link to="/signin">sign in</Link>
        </div>
        <div>
          <Link to="/signup">sign up</Link>
        </div>
        <div>
          <Link to="/signout">sign out</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
