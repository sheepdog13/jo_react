import logo from './logo.svg';
import './App.css';
import HelloComp from './components/HelloComp';
import HelloFuncComp from './components/HelloFuncComp';
import MyLogin from './components/MyLogin';
import FuncMyLogin from './components/FuncMyLogin';
import StateComp from './components/StateComp';
import StateFuncComp from './components/StateFuncComp';
import EventComp from './components/EventComp';
import EventFuncComp from './components/EventFuncComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloComp name="홍길동" adress="부산" num="1">반갑습니다</HelloComp>
        <HelloFuncComp name="성춘향" adress="" />
        {/* props은 컴포넌트를 사용할때 작성, html요소의 속성과 동일 */}
        <MyLogin login="false" name="홍길동" />
        {/* JSX언어임으로 {}통해서 자바스크립트를 쓸 수 있다 */}
        <FuncMyLogin login={true} />
        <StateComp />
        <StateFuncComp />
        <EventComp />
        <EventFuncComp />
      </header>
    </div>
  );
}

export default App;
