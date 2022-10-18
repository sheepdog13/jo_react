// 클래스형 컴포넌트
import { Component } from "react";
import './css/StoryDescript.css'

class StoryDescript extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const {children, visible} = this.props
        return (
            <div className="story-descript">
                <h3>분문</h3>
                <p>{children}</p>
                {visible ? (<p>공개</p>):(<p>비공개</p>)}
            </div>

          );
    }
}
 
export default StoryDescript;