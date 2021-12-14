import React, {Component} from "react";

class PhoneInfo extends Component{
    static defaultPrps ={
        info:{
            id: 0,
            name: '이름',
            phone: '01080077488'
        }
    }
    state ={
        // 수정 버튼을 눌렀을 때 editing 값을 true로 설정해줄것
        // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
        // input 형태로 보여주게 된다.
        editing: false,
        // input의 값은 유동적이므로 input 값을 담기 위해서 각
        // 필드를 위한 값도 설정한다.
        name:'',
        phone:''
    }
    handleRemove = () =>{
        // 삭제 버튼이 클릭되면 onRemove에 id를 넣어서 호출
        const {info, onRemove} =this.props;
        onRemove(info.id)
    }
    // editing 값을 반전시키는 함수
    // true -> false, false -> true
    handleToggleEdit=()=>{
        const {editing} = this.state;
        this.setState({editing: !editing})
    }
    doCancel=()=>{
        const{editing}=this.state
        this.setState({editing: !editing})
    }
    // input 에서 onChange 이벤트가 발생 될 때 호출되는 함수
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
    
    componentDidUpdate(prevProps, prevState){
        // 여기서는, editing값이 바뀔 때 처리 할 로직
        // 수정을 눌렀을땐, 기존의 값이 input에 나타나고,
        // 수정을 적용할땐, input의 값들을 부모한테 전달
        const{info, onUpdate} = this.props;
        if(!prevState.editing && this.state.editing){
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if( prevState.editing && !this.state.editing ){
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
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
        const {editing} = this.state;
        if(editing){
            return(
                <div style={style}>
                    <div>
                        <p>
                            <input 
                                value={this.state.id}
                                name='id'
                                onChange={this.handleChange}
                                placeholder="아이디" />
                        </p>
                        <p>
                            <input 
                                value={this.state.name}
                                name='name'
                                placeholder="이름"
                                onChange={this.handleChange} />
                        </p>
                        <p>
                            <input 
                                value={this.state.phone}
                                name='phone'
                                placeholder="번호"
                                onChange={this.handleChange} />
                        </p>
                        <button onClick={this.handleToggleEdit}>적용</button>
                        <button onClick={this.handleRemove}>삭제</button>
                        <button onClick={this.doCancel}>취소</button>
                    </div>
                </div>
            )
        }

        return(
            <div style={style}>
                <div>{id}</div>
                <div>{name}</div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo;