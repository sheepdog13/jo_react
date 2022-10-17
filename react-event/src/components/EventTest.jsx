// 클래스형 컴포넌트

import { Component } from "react";

class EventTest extends Component {
    constructor(props) {
        super(props);
        // state , name : "", longin : false
        // input에 값을 넣은 후 > name의 값이 input의 value값으로 
        // button을 클릭하면 login을 true로 만들고, name이 출력되는 h1태그를 작성하세요
        // false 일때는 h1태그가 출력되지않음 (삼항연산자 또는 &&연산자 참고)
        this.state = {
            name : "",
            login : false,
        }
    }   
    render() {
        return (
            <div>
                <input type="text" onChange={(e)=> {
                    this.setState({name : e.target.value})
                }}/>
                <button onClick={()=> {
                    this.setState({login:true})
                }}>로그인</button>
                { this.state.login && (<h1>{this.state.name}</h1>)
                }
            </div>
        )
    }
}
export default EventTest;
