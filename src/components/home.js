import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Link } from 'react-router';

// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';
// const ROOT_URL = 'https://cs52-devinahw4.surge.sh';

class Home extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }
  componentWillMount() {
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
    if (this.props.auth && this.props.auth.authenticated) {
      return (
        <div>
          <div id="title">
            <h1>Hey, there! You are on track for today.</h1>
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
    } else {
      return (
        <div>
          <div id="slogan">
            Chat with Watson and eat healthier
          </div>
          <div id="homepageCharts">
            <div id="chart">
              Graphic 1
            </div>
            <div id="chart">
              Graphic 2
            </div>
            <div id="chart">
              Graphic 3
            </div>
          </div>
          <div className="signup_button">
            <Link to="/signup">Join Watson Nutrition</Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return (
  {
    foods: state.foods.all,
    meals: state.foods.meals.meals,
    nutrition: state.foods.meals,
    auth: state.auth,
  }
  );
};

// react-redux glue -- outputs Container that know state in prop


export default connect(mapStateToProps, actions)(Home);
