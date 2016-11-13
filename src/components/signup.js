import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
    };
    this.onNewPhoneChange = this.onNewPhoneChange.bind(this);
    this.onNewPasswordChange = this.onNewPasswordChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }
  onNewPhoneChange(event) {
    console.log(event.target.value);
    this.setState({ phone: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onNewPasswordChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
    // this.props.onTextEdit(event.target.value);
  }
  onSignUp(event) {
    // this.props.onSubmit(this.state.notecontent);
    this.props.signupUser({ phone: this.state.phone, password: this.state.password });
  }
  render() {
    return (
      <div id="input-bar">
        <form>
          <input placeholder="Email" onChange={this.onNewPhoneChange} value={this.state.phone} />
        </form>
        <form>
          <input placeholder="Password" onChange={this.onNewPasswordChange} value={this.state.password} />
        </form>
        <form>
          <input type="button" value="Sign Up!" onClick={this.onSignUp} />
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


export default connect(mapStateToProps, actions)(SignUp);
// export default New;
