import React, { Component } from 'react';

export class ParentComponent extends Component {

    render() {
        return (
            <div style={{ background: 'red' }}>
                <h1>Parent Component</h1>
                <ChildComponent />
                <span>..End Parent Component..</span>
            </div>
        )
    }
}

class ChildComponent extends Component {

    render() {
        return (
            <div style={{ background: 'yellow' }}>
                <h1>Child Component</h1>
            </div>
        )
    }
}
