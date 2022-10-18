// 클래스형 컴포넌트

import { Component } from "react";

class StoryTiltle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time : new Date()
         }
    }
    state = {  }
    render() { 
        const {children} = this.props;
        const {time} = this.state;
        return (
            <div>
                <h1>{children}</h1>
                <p>{time.getMonth()+1}/{time.getDate()}</p>
            </div>
          );
    }
}
 
export default StoryTiltle;