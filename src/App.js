import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';

const api_key = "5782c3e70a6ecaf55d21dcede5364622";
const city = "San Jose"
//const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5782c3e70a6ecaf55d21dcede5364622"
const url = "https://api.openweathermap.org/data/2.5/weather?q=Sunnyvale,%20us&appid=5782c3e70a6ecaf55d21dcede5364622&units=imperial"

class App extends React.Component{
  constructor(props){
    super(props);
    //This state will contain information pertinent towards the app
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
    this.getWeather = this.getWeather.bind(this); 
  }
  //This method will be responsible for ensuring that weather api data is fetched.
  getWeather = async(e) => {
    e.preventDefault(); //Preventing default behavior which means page will refresh and log data
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    //const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sunnyvale, us&appid=${api_key}&units=imperial`);
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=5782c3e70a6ecaf55d21dcede5364622&units=imperial`)
    const data = await api_call.json();
    if(city && country){
        console.log(data);
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values for country and city"
      });
    }
  }
  //Rendering the main app information: 
  render(){
    return(
      <div>
        <Titles />
        <Form weather_call = {this.getWeather}/>
        <Weather 
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;

