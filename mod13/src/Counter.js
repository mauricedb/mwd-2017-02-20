import React, { Component } from 'react';
import Hello from './Hello';

class CounterPresentation extends Component {
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(){
        this.props.increment();
        this.props.increment();
        this.props.increment();
    }

    render() {
        console.log('Rendering Counter')
        return (
            <div>
                <Hello name={"Maurice"} />
                <div>
                    <button onClick={this.onClick}>Add</button>
                </div>
                <div>
                    Count: {this.props.counter}
                </div>
                
            </div>
        );
    }
}

class CounterCountainer extends Component {
    constructor(){
        super();
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this)
    }

    increment(){
        // this.setState({counter: this.state.counter + 1});
        this.setState(state => ({counter: state.counter + 1}));
    }


    render() {
        return <CounterPresentation counter={this.state.counter} increment={this.increment} />;
        }
}



export default CounterCountainer;