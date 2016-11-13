import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';
// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';

class About extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <img alt="Analyze calories with Watson" src="src/pictures/CalorieDriver.png" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
  {

  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(About);
