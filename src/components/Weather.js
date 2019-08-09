import React from "react";

class Weather extends React.Component{
    render(){
        return (
            <div>
                {this.props.country && <p> Country: {this.props.country} </p>}
                {this.props.city && <p> City: {this.props.city} </p>}
                {this.props.temperature && <p> Temperature: {this.props.temperature} </p>}
                {this.props.humidity && <p> Humidity: {this.props.city} </p>}
                {this.props.description && <p> Conditions: {this.props.description} </p>}
            </div>
        );
    }
}

export default Weather;