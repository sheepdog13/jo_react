import './App.css';
import CallbackComp from './components/CallbackComp';
import ReducerComp from './components/ReducerComp';
import RefComp from './components/RefComp';
import StateEffectHookComp from './components/StateEffectHookComp';
import UseMemoComp from './components/UseMemoComp';

function App() {
  return (
    <div className="App">
      <StateEffectHookComp />
      <ReducerComp />
      <UseMemoComp />
      <CallbackComp />
      <RefComp />
    </div>
  );
}

export default App;
