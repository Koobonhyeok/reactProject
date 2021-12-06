import React, {Component} from "react";

class Prop extends Component{
    render(){
        return (<div><p> 안녕하세요. {this.props.text} 테스트 입니다 </p></div>)
    }
}

Prop.defaultText ={
    text: "TEST"
}

export default Prop;