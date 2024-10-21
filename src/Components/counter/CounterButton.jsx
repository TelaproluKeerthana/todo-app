import {PropTypes} from 'prop-types'
const CounterButton=({by,increment,decrement})=>{
    return(
        <div className="CounterButton">
            <>
            <button className="counterButton" onClick={()=>increment(by)}>+{by}</button>
            </>
            <>
            <button className="counterButton" onClick={()=>decrement(by)}>-{by}</button>
            </>
        </div>
    )
}
CounterButton.propTypes = {
    by: PropTypes.number
}
export default CounterButton;