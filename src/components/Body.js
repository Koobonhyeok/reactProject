import React, { Component } from 'react';
import PhoneForm from './PhoneForm';

// 같은 Component에서 해야하나
class Body extends Component{
    handleCreate = (data)=>{
        console.log(data);
    }
    render() {  
        return (    
            <div><PhoneForm onCreate={this.handleCreate} /></div>
                
                    
        );
    }
}

export default Body;