import React from 'react';

class Hello extends React.PureComponent {
    render() {
        return <div>Hello {this.props.name} </div>;
    }
}

export { Hello as default };
