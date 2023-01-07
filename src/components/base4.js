import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Base4(props) {
    const cash = useSelector((state) => state.cash)
    const dispatch = useDispatch();
  
    function addMoney() {
      dispatch({type: 'ADD_MONEY', payload: 1000})
    }
  
    function getMoney() {
      dispatch({type: 'GET_MONEY', payload: 1000})
    }
  
    return(
        <div>
            <hr/>
            <div>
                <button onClick={() => {addMoney()}}>ADD 1000$</button>
                <button onClick={() => {getMoney()}}>Get 1000$</button>
            </div>
        </div>
    )
}

export default Base4