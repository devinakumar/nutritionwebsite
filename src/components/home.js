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
          text: '% of Total Daily Value',
        },
        xAxis: {
          categories: ['Calories', 'Total Fat', 'Protein', 'Total Carbs', 'Sugar'],
        },
        yAxis: {
          min: 0,
          title: {
            text: '',
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
        <div id="content">
          <div id="title">
            <h1>Daily Nutrition Summary</h1>
          </div>
          <div id="dailytracking">
            <div id="stats">
              {this.statsView()}
            </div>
          </div>
          <div>
            {this.graphView()}
          </div>
          <div id="listview">
            <p>Here's what you've eaten so far today:</p>
            {this.listView()}
          </div>
          <br /><br /><br />
        </div>
      );
    } else {
      return (
        <div id="content">
          <div id="slogan">
            Chat with Watson and eat healthier
          </div>
          <div id="imgCaption">
            Talk to a Nutrition Assistant and learn about calories, carbohydrates, and more.
          </div>
          <img id="chatImg" src="/src/pictures/chat.png" />
          <div id="imgCaption">
            Analyze your eating habits and pick the right foods.
          </div>
          <img id="fatImg" src="/src/pictures/totalFat.png" />
          <div id="imgCaption">
            Watson Analytics can help you live happier and healthier.
          </div>
          <img id="driversImg" src="/src/pictures/drivers.png" />

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
