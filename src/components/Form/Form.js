import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <input
                type="text"
                value={props.value}
                placeholder="Your city..."
                onChange={props.change} />
            <button type="submit">Search</button>
        </form>
    );
}

export default Form;