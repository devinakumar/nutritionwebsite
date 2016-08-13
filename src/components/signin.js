import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  onEmailChange(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onPasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onSignIn(event) {
    // this.props.onSubmit(this.state.notecontent);
    this.props.signinUser({ email: this.state.email, password: this.state.password });
  }
  render() {
    return (
      <div id="input-bar">
        <form>
          <input placeholder="Email" onChange={this.onEmailChange} value={this.state.email} />
        </form>
        <form>
          <input placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
        </form>
        <form>
          <input type="button" value="Sign In!" onClick={this.onSignIn} />
        </form>
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


export default connect(mapStateToProps, actions)(SignIn);
// export default New;
