import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Base2(props) {
    const cash = useSelector((state) => state.cash)
    const dispatch = useDispatch();
  
    function addMoney() {
      dispatch({type: 'ADD_MONEY', payload: 200})
    }
  
    function getMoney() {
      dispatch({type: 'GET_MONEY', payload: 200})
    }
  
    return(
        <div>
            <hr/>
            <div>
                <button onClick={() => {addMoney()}}>ADD 200$</button>
                <button onClick={() => {getMoney()}}>Get 200$</button>
            </div>
        </div>
    )
}

export default Base2