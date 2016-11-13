import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);

      // init component state here
    this.state = {};
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signoutUser();
  }

  render() {
    const signIn = (<ul><li><Link to="/signin" id="link">Login</Link></li></ul>);
    const signOut = (<ul><li><Link to="#signout" onClick={() => { this.signOut(); }} id="link">Logout</Link></li></ul>);

    let accountLinks;
    console.log('state is');
    console.log(this.props.auth);
    if (this.props.auth && this.props.auth.authenticated) {
      accountLinks = signOut;
    } else {
      accountLinks = signIn;
    }

    return (
      <nav>
        <div className="title">
          <Link to="/"><span className="emphasize">Watson</span> Nutrition</Link>
        </div>
        {accountLinks}
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    auth: state.auth,
  });
};

export default connect(mapStateToProps, actions)(NavBar);
