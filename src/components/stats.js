import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';
// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';
const SMS_KEY = '239jdsd48ajdsjccbxbncbc393948828139485754883jkbvdaaa';

class Stats extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };
  }
  componentWillMount() {
    // this.props.fetchPosts();
    this.props.fetchMeals({ phone: '9178280824', smsKey: SMS_KEY });
  }
  listView() {
    // return this.props.meals.map((meal) => {
    //   return <li key={meal.foodName}>{meal.foodName}</li>;
    // });
    console.log(this.props.meals);
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
    meals: state.foods.meals,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Stats);
