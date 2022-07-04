import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
    render() {
        const {onResetAll, onDecrement, onIncrement, counters, onReset} = this.props;
        
        return (
        <div>
            <button onClick={onResetAll} className="btn btn-primary btn-sm m-2">Reset All</button>
            {counters.map(counter => 
            <Counter key={counter.id}
            value={counter.value}
            selected={true}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}/>)}
        </div>
        )
    }
}
 
export default Counters;