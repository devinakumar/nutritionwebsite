import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';

// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';
// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';

class Stats extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
    };
  }
  componentWillMount() {
    // this.props.fetchPosts();
    this.props.fetchMeals();
  }
  listView() {
    if (this.props.meals) {
      console.log(this.props.foods);
      console.log(this.props.nutrition);
      return this.props.meals.map((meal) => {
        return <li key={meal.id}>{meal.foodName}</li>;
      });
    } else {
      console.log('no');
    }
    return <li>loading</li>;
  }
  statsView() {
    const nutrition = ['calories', 'totalFat', 'protein', 'totalCarb', 'sugar'];
    return nutrition.map((stat) => {
      return <li key={stat}>{stat}: {this.props.nutrition[stat]}</li>;
    });
  }
  render() {
    return (
      <div>
        <div id="title">
          <h1>Statistics
          </h1>
        </div>
        <div id="stats">
        Statistics for Today
          {this.statsView()}
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
    meals: state.foods.meals.meals,
    nutrition: state.foods.meals,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Stats);
