import { useState } from 'react';
import './counter.css';
import CounterButton from './CounterButton';
const Counter=()=>{
    const [count,setCount]=useState(0)
    function incrementCounterUp(by) {
        setCount(count + by)
    }
    function decrementCounterUp(by) {
        setCount(count - by)
    }
    const reset=()=>setCount(0);
    
    return(
        <>
        <span className="count">{count}</span>
         <CounterButton by={1} increment={incrementCounterUp} decrement={decrementCounterUp}/>
    <CounterButton by={2} increment={incrementCounterUp} decrement={decrementCounterUp}/>
    <CounterButton by={3} increment={incrementCounterUp} decrement={decrementCounterUp}/>
    <button onClick={reset} >Reset</button>
        </>
    )
}

export default Counter;