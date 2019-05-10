import React from 'react';
import './Form.css';

const Form = props => {
    return (
        <form onSubmit={props.submit} className="weather-form">
            <input
                type="text"
                placeholder="Your city..."
                name="city"
                className="weather-form__input" />
            <button type="submit" className="weather-form__button">Search</button>
        </form>
    );
}

export default Form;