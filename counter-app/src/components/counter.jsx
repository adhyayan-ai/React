import React, { Component } from 'react';

class Counter extends Component {
    // constructor() {
    //     super();
    //     this.handleIncerement = this.handleIncerement.bind(this)
    // }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>Decrement</button>
                <button onClick={() => this.props.onReset(this.props.counter)} className="btn btn-primary rounded-pill">Reset</button>
            </div>
            
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary"
        return classes
    }

    formatCount() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value
    }
}  
 
export default Counter;