import React, { Component } from "react";

class PhoneForm extends Component{
    state={
        name: '',
        phone: ''
    }
    handleChange = (e)=>{
        
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.phone] : e.target.value
        })
    }
    handleSubmit = (e)=>{
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate를 통하여 부모에서 전달
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='이름' value={this.state.name} onChange={this.handleChange} name='name' />
                    <input placeholder='전화번호' value={this.state.phone} onChange={this.handleChange} name='phone' />
                    <div><span>{this.state.name}</span> / <span>{this.state.phone}</span> </div>            
                    <button type="submit">등록</button>
                </form>
            </div>
            
        )
        
    }
}

export default PhoneForm;