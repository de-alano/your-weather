import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import Weather from './Weather/Weather';
import { getWeather } from '../utils/getWeather';

class App extends Component {

  state = {
    value: '',
    city: '',
    currentWeather: [],
    weeklyWeather: [],
    error: '',
  }

  inputChangeHandler = e => {
    this.setState({
      value: e.target.value
    });
  }

  citySubmitHandler = e => {
    getWeather(this.state.value)
      .then(data => console.log(data))



    e.preventDefault();
  }

  render() {

    const { value } = this.state;

    return (
      <div className="App" >
        <Form
          value={value}
          change={this.inputChangeHandler}
          submit={this.citySubmitHandler} />
        <Weather />
      </div>
    );
  }
}

export default App;
