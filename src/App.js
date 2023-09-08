import React from 'react';
import Definitions from './Definitions';

const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
];

function App() {
    return (
        <div>
            <h1>Список определений</h1>
            <Definitions data={definitions} />
        </div>
    );
}

export default App;



