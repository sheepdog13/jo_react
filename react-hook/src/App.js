import './App.css';
import CallbackComp from './components/CallbackComp';
import ContextCompAll from './components/ContextCompAll';
import ContextParentComp1 from './components/ContextParentComp1';
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
      <ContextCompAll />
      <ContextParentComp1 />
    </div>
  );
}

export default App;
