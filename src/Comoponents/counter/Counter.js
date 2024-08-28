import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"

const Counter = () => {
    const count = useSelector((state)=>state.Counter.count)
    const dispatch = useDispatch()
    const [incremtAmount, setIncrementAmount]= useState(0)
    const addValue = Number(incremtAmount) || 0
    const resetAll = ()=>{
      setIncrementAmount(0)
      dispatch(reset())
    }
  return (
    <section>
        <h1>Counter App in Advance-Redux</h1>
        <div>
            <button onClick={()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
        </div>
        <input type="text" value={setIncrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}/>
        <div>
          <button onClick={()=>dispatch(incrementByAmount(addValue))}>ADD Amount</button>
          <button onClick={resetAll}>Reset</button>
        </div>
    </section>
  )
}

export default Counter