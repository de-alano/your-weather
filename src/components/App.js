import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Weather from './Weather/Weather';
import { fetchWeather } from '../utils/fetchWeather';

class App extends Component {

  state = {
    city: '',
    currentWeather: {},
    weeklyWeather: [],
    error: false,

  }


  getWeather = (e) => {
    const city = e.target.elements.city.value;

    fetchWeather(city)
      .then(data => {
        console.log(data);

        if (city) {
          this.setState({
            city: data.city.name,
            currentWeather: data.list[0],
            weeklyWeather: data.list,
            error: false,
          });
        }

        console.log(this.state.currentWeather);
        console.log(this.state.weeklyWeather);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: true
        });
      })

    e.preventDefault();
  }




  render() {

    const { error, city, currentWeather, weeklyWeather } = this.state;


    return (
      <div className="App" >
        <Form
          submit={this.getWeather} />
        <Weather
          error={error}
          current={currentWeather}
          weekly={weeklyWeather}
          city={city} />
      </div>
    );
  }
}

export default App;
