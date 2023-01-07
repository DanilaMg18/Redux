import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Base3(props) {
    const cash = useSelector((state) => state.cash)
    const dispatch = useDispatch();
  
    function addMoney() {
      dispatch({type: 'ADD_MONEY', payload: 500})
    }
  
    function getMoney() {
      dispatch({type: 'GET_MONEY', payload: 500})
    }
  
    return(
        <div>
            <hr/>
            <div>
                <button onClick={() => {addMoney()}}>ADD 500$</button>
                <button onClick={() => {getMoney()}}>Get 500$</button>
            </div>
        </div>
    )
}

export default Base3