import React from 'react'
import ReactDOM from 'react-dom'
// class Hello extends React.Component {
//     render(){

//         return React.createElement('h1', null, 'Hello')
//     }
// }

class Clock extends React.Component {
    constructor(){
        super();
        this.state = {
            now: new Date().toLocaleTimeString()
        };

        setInterval(() => {
            // this.state.now = new Date().toLocaleTimeString()
            this.setState({
                now: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    render(){
        console.log('Rendering Clock')
        const now = this.state.now

        return <div>{now}
        <Hello name='from clock' />
        </div>;
    }
}

class Hello extends React.Component {
    render() {
        // console.log(this.props)
        console.log('Rendering Hello')
        return <h1>Hello {this.props.name}</h1>;
    }
}

Hello.propTypes = {
    name: React.PropTypes.string.isRequired
}


class Controlled extends React.Component{
    constructor(){
        super();
        this.state = {
            value : '123'
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({value: e.target.value})
    }
    render(){

        return <input value={this.state.value} onChange={this.onChange} />
    }
}

class Uncontrolled extends React.Component{
    constructor(){
        super();

        this.input =  null;

        setInterval(() => console.log(this.input.value), 5000)
    }

    render(){

        return <input defaultValue='123' ref={e => this.input = e} />
    }
}

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }

        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        console.log('I was clicked')
        this.setState({counter: this.state.counter + 1})
    }
    render(){
        console.log('Rendering App')
        return ( 
        <div>
            <Hello name={'Maurice'} />
            <button onClick={this.onClick}>Click me</button>
            {this.state.counter}
            <Clock/>
            <Controlled />
            <Uncontrolled />
        </div>
        );

    }
}
ReactDOM.render(<App />,
    document.getElementById('app')
)