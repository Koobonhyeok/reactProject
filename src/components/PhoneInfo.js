import React, {Component} from "react";

class PhoneInfo extends Component{
    static defaultPrps ={
        info:{
            id: 0,
            name: '이름',
            phone: '01080077488'
        }
    }

    render(){
        const style={
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };
        const {
            name, phone, id
        }= this.props.info

        return(
            <div style={style}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{phone}</div>
            </div>
        )
    }
}

export default PhoneInfo;