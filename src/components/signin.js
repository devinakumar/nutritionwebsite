import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
    };
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }
  onPhoneChange(event) {
    console.log(event.target.value);
    this.setState({ phone: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onPasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onSignIn(event) {
    // this.props.onSubmit(this.state.notecontent);
    this.props.signinUser({ phone: this.state.phone, password: this.state.password });
  }
  render() {
    return (
      <div id="input-bar">
        <form>
          <input placeholder="Phone Number" onChange={this.onPhoneChange} value={this.state.phone} />
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
