import React from "react";

class Weather extends React.Component{
    render(){
        return (
            <div>
                <p> City: {this.props.city}</p>
                <p> Country: {this.props.country}</p>
                <p> Temperature: {this.props.temperature} </p>
                <p> Humidity: {this.props.humidity}</p>
                <p> Description: {this.props.description}</p>
            </div>
        );
    }
}

export default Weather;