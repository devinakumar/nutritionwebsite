import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';
// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';

class Home extends Component {
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
        <div id="slogan">
          Chat with Watson and eat healthier
        </div>
        <div id="homepageCharts">
          <div id="chart">
            Chart 1
          </div>
          <div id="chart">
            Chart 2
          </div>
          <div id="chart">
            Chart 3
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
  {
    posts: state.posts.all,
    foods: state.foods.all,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Home);
