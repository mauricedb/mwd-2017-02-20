import React, { Component } from 'react';

const cats = [
    {name: 'Zorro', type:'Cat'},
    {name: 'Sarah', type:'Cat'},
]

class Cats extends Component {
    render() {

        return (
            <ul>
                {cats.map(cat => <li key={cat.name}>{cat.name}</li>)}
            </ul>
        );
    }
}

export default Cats;