import React from 'react';

const Weather = props => (
        <div>
            { props.city &&
            <div>
                <p>Местоположение: {props.city} , {props.country}</p>
                <p>Температура: {props.temp} С</p>
                <p>Закат солнца: {props.sunset}</p>
                <p>Давление: {props.pressure} Бар</p>
            </div>
            }
            <p>{props.error}</p>
        </div>
    );

export default Weather;
