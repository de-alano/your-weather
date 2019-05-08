import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <input
                type="text"
                placeholder="Your city..."
                name="city" />
            <button type="submit">Search</button>
        </form>
    );
}

export default Form;