import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Link } from 'react-router';

class SignOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut(event) {
    // this.props.onSubmit(this.state.notecontent);
    this.props.signoutUser();
  }
  render() {
    return (
      <div id="navbar">
        <div>
          <Link to="/">No!</Link>
        </div>
        <div>
          <form>
            <input type="button" value="Yes" onClick={this.onSignOut} />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
  {
    auth: state.auth.authenticated,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(SignOut);
// export default New;
