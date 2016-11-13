import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';
// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';

class Food extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }
  componentWillMount() {
    // this.props.fetchPosts();
    this.props.fetchFoods();
  }
  listView() {
    return this.props.foods.map((food) => {
      return <li key={food.name}>{food.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <div id="title">
          <h1>All Food</h1>
        </div>
        <div id="listview">
          {this.listView()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
  {
    foods: state.foods.all,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Food);
