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
    this.props.fetchFoods();
  }
  // listView() {
  //   return this.props.posts.map((post) => {
  //     return <li key={post.id}><a href={`/posts/${post.id}`}>{post.title}</a></li>;
  //   });
  // }
  listView() {
    return this.props.foods.map((food) => {
      return <li key={food.name}><a href={`/food/${food.name}`}>{food.name}</a></li>;
    });
  }
  render() {
    return (
      <div>
        <div id="title">
          <h1>Life of Devina</h1>
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
    posts: state.posts.all,
    foods: state.foods.all,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Home);
