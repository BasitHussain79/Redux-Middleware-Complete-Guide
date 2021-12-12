import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      <h3>count: {state}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
