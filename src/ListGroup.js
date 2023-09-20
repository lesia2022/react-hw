import React from 'react';

function ListGroup({ children }) {
    return (
        <ul className="list-group">
            {React.Children.map(children, (child, index) => (
                <li className="list-group-item" key={index}>
                    {child}
                </li>
            ))}
        </ul>
    );
}

export default ListGroup;
