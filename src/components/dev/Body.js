import React, { Component } from 'react';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

// 같은 Component에서 해야하나
class Body extends Component{
    state ={
        information : [
            {
                id:0,
                name: '구본혁',
                phone: '01080077488'
            },
            {
                id:1,
                name: '유준태',
                phone: '01077638118'
            }
        ],
        keyword: ''
    }
    id = this.state.information.length;
    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({
            keyword : e.target.value
        })
        
    }
    handleCreate = (data)=>{
        const { information } =this.state;
        this.setState({
            information: information.concat({ id: this.id++, name:data.name, phone:data.phone})
        })
    }
    handleRemove = (id)=>{
        const {information} = this.state
        this.setState({
            information: information.filter(info=> info.id !== id)
        })
    }
    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
          information: information.map(
            info => id === info.id
              ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
              : info // 기존의 값을 그대로 유지
          )
        })
      }
    render() {  
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
          );
        return (    
            <div>
                <PhoneForm 
                    onCreate={this.handleCreate} />
                <p>
                <input 
                    placeholder='검색어를 입력해 주세요.' 
                    onChange={this.handleChange} 
                    value={keyword}/>
                </p>
                <hr />
                <PhoneInfoList 
                    data={filteredList} 
                    onRemove={this.handleRemove} 
                    onUpdate={this.handleUpdate} />
            </div>
                
        );
    }
}

export default Body;