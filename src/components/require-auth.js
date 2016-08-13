import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);
    }
    componentWillMount(){
      if (this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }
    componentWillUpdate(){
      // don't understand the next props
    }
    render(){
      return(
        <div>
          <ComposedComponent />
        </div>
      );
    }



  return (connect(mapStateToProps, null)(RequireAuth));
}
