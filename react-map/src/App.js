import './App.css';
import ClassNameComp from './components/ClassNameComp';
import LifeCycleComp from './components/LifeCycleComp';
import MapComp from './components/MapComp';
import MapCompTest from './components/MapCompTest';

function App() {
  return (
    <div className="App">
      <MapComp />
      <MapCompTest />
      <LifeCycleComp />
      <ClassNameComp />
    </div>
  );
}

export default App;
