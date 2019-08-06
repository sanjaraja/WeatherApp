import React from "react"

class Form extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.weather_call}> 
                <input type="text" name="city" placeholder="City..."/>
                <input type="text" name="city" placeholder="Country..." />
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;