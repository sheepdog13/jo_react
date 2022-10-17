import React from "react";
import { Component } from "react";

class EventRefCompTest extends Component {
    constructor(props) {
        super(props);
        // 콜백함수를 통해 DOM을 가져온다
        this.input = null;
        this.setInputRef = (element) => {
            this.input = element;
    }
    // create Ref를 통해서 가져온 DOM
    this.changeColor = this.changeColor.bind(this);

    this.myRef = React.createRef();

    this.changeRefColor = () => {
        console.log(this.myRef);
        this.myRef.current.style.backgroundColor = "red";
    }
}
changeColor() {
    this.input.style.backgroundColor = "red";
}
    render() {
        return (
            <div>
                <input type="text" ref={this.setInputRef}/>
                <button onClick={this.changeColor}>색을 바꿉니다</button>
                <input type="text" ref={this.myRef}/>
                <button onClick={this.changeRefColor}>색을 바꿉니다</button>
            </div>
        )
    }
}

export default EventRefCompTest;