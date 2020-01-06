import React from 'react';
import Info from './component/info';
import Form from './component/form';
import Weather from './component/weather';

const API_KEY = '5b2dc45daa65e84346fd6a18e2bf515e';

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunset: undefined,
        sunrise: undefined,
        error: undefined
    }

    getWeather = async (event) => {
        event.preventDefault();
        let city = event.target.elements.city.value;
        try {
            if (city) {

                const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);

                const data = await api_url.json();


                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    error: '',
                });
            } else {
                this.setState({
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    error: 'Вы ничего не ввели.'
                });
            }
        }
        catch (error) {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                error: 'Такого города не существует'
            });
        }
    }
    render() {
        return (
            <div>
                <Info />
                <Form getWeather={this.getWeather}/>
                <Weather
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                pressure={this.state.pressure}
                error={this.state.error}
                />
            </div>
        )
    }
}

export default App;
