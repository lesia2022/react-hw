import React from 'react';

function Alert({ text, type }) {
    const alertClass = `alert alert-${type}`;

    return (
        <div className={alertClass} role="alert">
            {text}
        </div>
    );
}

export default Alert;

