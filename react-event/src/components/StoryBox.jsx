import { Component } from "react";
import StoryDescript from "./StoryDescript";
import StoryTiltle from "./StoryTitle";

class StoryBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <StoryTiltle>제목입니다</StoryTiltle>
                <StoryDescript visible={true}>본문내용입니다</StoryDescript>
                <StoryDescript visible={false}>본문내용입니다</StoryDescript>
            </div>
          );
    }
}
 
export default StoryBox;