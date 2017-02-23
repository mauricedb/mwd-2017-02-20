import React, { PureComponent } from 'react';

class Hello extends PureComponent {
    render() {
        console.log('Rendering Hello')
        return (
            <div>
                Hello {this.props.name}     
            </div>
        );
    }
}

Hello.propTypes ={
    name: React.PropTypes.string
}

Hello.defaultProps= {
    name: 'Unkown'
}

export default Hello;
