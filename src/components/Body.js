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
        ]
    }
    id = this.state.information.length;
    handleCreate = (data)=>{
        const { information } =this.state;
        this.setState({
            
            information: information.concat({ id: this.id++, name:data.name, phone:data.phone})
        })
    }
    render() {  
        //const { information } = this.state;
        return (    
            <div>
                <PhoneForm onCreate={this.handleCreate} />
                <PhoneInfoList data={this.state.information} />
            </div>
                
        );
    }
}

export default Body;