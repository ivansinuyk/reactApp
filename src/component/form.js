import React from 'react';

const Form = props => (
    <form onSubmit={props.getWeather}>
        <input type="text"  name="city" placeholder="городl"/>
        <button>Узнать погоду</button>
    </form>
);

export default Form;
