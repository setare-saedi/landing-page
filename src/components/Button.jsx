import React from 'react';

function Button({ label, class1 }) {
    return (
        <button className= {class1}>
            {label}
        </button>
    );
}

export default Button;