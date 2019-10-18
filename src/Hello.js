import React, { Component } from 'react'

export class Hello extends Component {
    render() {
        return (
            <div>
                <Hello name={this.props.name} />
             </div>
        )
    }
}

export default Hello
