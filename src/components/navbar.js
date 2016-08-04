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
          <Link to="/">My site!</Link>
        </div>
        <div>
          <Link to="/posts/new">new post</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
