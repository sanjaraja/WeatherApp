import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

const api_key = "5782c3e70a6ecaf55d21dcede5364622";
const city = "San Jose"
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5782c3e70a6ecaf55d21dcede5364622"

class App extends React.Component{
  getWeather = async(city) => {
    const api_call = await fetch();
  }
  constructor(props){
    super(props);
    this.state = {
      weather: "I can see the weather state"
    }
  }
  render(){
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
        {this.state.weather}
      </div>
    );
  }
}

export default App;

