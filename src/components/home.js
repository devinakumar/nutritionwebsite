import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { Link } from 'react-router';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import SimpleTable from 'react-simple-table';

require('highcharts/modules/exporting')(Highcharts);

const DAILY_CALORIES = 2200;
const DAILY_FAT = 65;
const DAILY_PROTEIN = 50;
const DAILY_CARBS = 294;
const DAILY_SUGAR = 25;

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
      return this.props.meals.map((meal) => {
        return <li key={meal.id}>{meal.foodName}</li>;
      });
    } else {
      console.log('no');
    }
    return <li>loading</li>;
  }
  // statsView() {
  //   const nutrition = ['calories', 'totalFat', 'protein', 'totalCarb', 'sugar'];
  //   return nutrition.map((stat) => {
  //     return <li key={stat}>{stat}: {this.props.nutrition[stat]}</li>;
  //   });
  // }
  statsView() {
    if (this.props.nutrition) {
      const nutritionfacts = [{
        Calories: this.props.nutrition.calories,
        Fat: this.props.nutrition.totalFat,
        Protein: this.props.nutrition.protein,
        Carbohydrates: this.props.nutrition.totalCarb,
        Sugar: this.props.nutrition.sugar,
      }];
      return (
        <SimpleTable
          columns={['Calories', 'Fat', 'Protein', 'Carbohydrates', 'Sugar']}
          data={nutritionfacts}
        />
   );
    } else {
      return <div>Loading stats...</div>;
    }
  }
  graphView() {
    if (this.props.nutrition) {
      // const calories = this.props.nutrition.calories;
      // const totalFat = this.props.nutrition.totalFat;
      // const protein = this.props.nutrition.protein;
      // const totalCarb = this.props.nutrition.totalCarb;
      // const sugar = this.props.nutrition.sugar;
      const mycalories = (this.props.nutrition.calories / DAILY_CALORIES) * 100;
      const mytotalFat = (this.props.nutrition.totalFat / DAILY_FAT) * 100;
      const myprotein = (this.props.nutrition.protein / DAILY_PROTEIN) * 100;
      const mytotalCarb = (this.props.nutrition.totalCarb / DAILY_CARBS) * 100;
      const mysugar = (this.props.nutrition.sugar / DAILY_SUGAR) * 100;
      const mycaloriesleft = (100 - mycalories);
      const mytotalFatleft = (100 - mytotalFat);
      const myproteinleft = (100 - myprotein);
      const mytotalCarbleft = (100 - mytotalCarb);
      const mysugarleft = (100 - mysugar);
      const userNutrition = {
        chart: {
          type: 'bar',
        },
        title: {
          text: 'Your Nutrition',
        },
        xAxis: {
          categories: ['calories', 'totalFat', 'protein', 'totalCarb', 'sugar'],
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Percent of total daily value',
          },
        },
        legend: {
          reversed: true,
        },
        plotOptions: {
          series: {
            stacking: 'normal',
          },
        },
        series: [{
          name: 'Goal left',
          data: [mycaloriesleft, mytotalFatleft, myproteinleft, mytotalCarbleft, mysugarleft],
          color: '#696969',
        }, {
          name: 'You',
          data: [mycalories, mytotalFat, myprotein, mytotalCarb, mysugar],
          color: '#00008B',
        }],
      };
      return <ReactHighcharts config={userNutrition} />;
    } else {
      return <div>Loading graph...</div>;
    }
  }
  render() {
    if (this.props.auth && this.props.auth.authenticated) {
      return (
        <div>
          <div id="title">
            <h1>Hey, there! You are on track for today.</h1>
          </div>
          <div id="dailytracking">
            <div id="stats">
            Statistics for Today
              {this.statsView()}
            </div>
            <div id="listview">
              {this.listView()}
            </div>
          </div>
          <div>
            {this.graphView()}
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
