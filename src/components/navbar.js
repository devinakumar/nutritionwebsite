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
      <nav>
        <div className="title">
          <Link to="/"><span className="emphasize">Watson</span> Nutrition</Link>
        </div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li className="li_sign_in"><Link to="/signin" className="sign_in">Sign in</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
