import React, { Component } from "react";

class PhoneForm extends Component{
    state={
        name: '',
        phone: ''
    }
    handleChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e)=>{
        console.log('submit');
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate를 통하여 부모에서 전달
        this.props.onCreate(this.state);
        
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='이름' value={this.state.name} onChange={this.handleChange} name='name' />
                    <div>{this.state.name}</div>            
                    <button type="submit">등록</button>
                </form>
            </div>
            
        )
        
    }
}

export default PhoneForm;