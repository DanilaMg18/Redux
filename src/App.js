import { useDispatch, useSelector } from "react-redux";
import Base from "./components/base";
import Base2 from "./components/base2";
import Base3 from "./components/base3";
import Base4 from "./components/base4";

function App() {
  const cash = useSelector((state) => state.cash)
  const dispatch = useDispatch();

  function addMoney() {
    dispatch({type: 'ADD_MONEY', payload: 100})
  }

  function getMoney() {
    dispatch({type: 'GET_MONEY', payload: 100})
  }

  return (
    <div className="App">
      <h1>Account money is : ${cash}</h1>
      <Base/>
      <Base2/>
      <Base3/>
      <Base4/>
    </div>
  );
}

export default App;
