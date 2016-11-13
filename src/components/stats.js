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
    this.listView = this.listView.bind(this);
    this.statsView = this.statsView.bind(this);
  }
  componentWillMount() {
    // this.props.fetchPosts();
    this.props.fetchMeals();
  }
  listView() {
    // TODO: Could not get this to display somehow..

    const meals = this.props.meals.meals;

    console.log(meals);
    // return meals.map((meal, index) => {
    //   return <li key={meal.id}>{meal.foodName}</li>;
    // });
    // meals.forEach((meal) => {
      // console.log(meal);
    // });
    // return this.props.meals.meals.forEach((meal) => {
    //   return <li key={meal._id}>{meal.foodName}</li>;
    // });
    // return this.props.meals.map((meal) => {
    //   return <li key={meal.name}>{meal.name}</li>;
    // });
  }
  statsView() {
    const nutrition = ['calories', 'totalFat', 'protein', 'totalCarb', 'sugar'];
    return nutrition.map((stat) => {
      return <li key={stat}>{stat}: {this.props.meals[stat]}</li>;
    });
  }
  render() {
    return (
      <div>
        <div id="title">
          <h1>Life of Devina</h1>
        </div>
        <div id="stats">
        Statistics for Today
          {this.statsView()}
        </div>
        <div id="listview">
        All Meals
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
    meals: state.foods.meals,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Stats);
