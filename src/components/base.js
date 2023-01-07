import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Base(props) {
    const cash = useSelector((state) => state.cash)
    const dispatch = useDispatch();
  
    function addMoney() {
      dispatch({type: 'ADD_MONEY', payload: 100})
    }
  
    function getMoney() {
      dispatch({type: 'GET_MONEY', payload: 100})
    }
  
    return(
        <div>
            <div>
                <button onClick={() => {addMoney()}}>ADD 100$</button>
                <button onClick={() => {getMoney()}}>Get 100$</button>
            </div>
        </div>
    )
}

export default Base