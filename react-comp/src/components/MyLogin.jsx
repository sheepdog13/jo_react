// 클래스형 컴포넌트로
// props 값을 login 과 name을 받아와서
// login 이 true 일때 
// 로그인에 성공 하였습니다 name 입니다를 출력하고
// 아닐때 로그인이 필요합니다를 출력하느 컴포넌트 작성
import { Component } from "react"

class MyLogin extends Component {
    render() {
        const {login, name} = this.props
        return login == 'true' ? (
            <div>
                <h1>로그인에 성공하였습니다</h1>
                <p>{name}입니다</p>
            </div>
        ) : (
            <h1>로그인이 필요합니다</h1>
            
        )
    }
}

export default MyLogin;
