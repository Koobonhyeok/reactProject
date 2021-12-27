import React, {Component} from 'react';

class Schedule extends Component{
    render() {
        return (
            <div className='schedule_div'>
                <h1 className='scedule_title'>{this.props.clickDay}</h1>
                <p>
                    <span>제목</span>
                    <span><input className='input_text' placeholder='제목'/> </span>
                </p>
                <p>
                    <span className='ss'>내용</span>
                    <span><textarea className='input_text textarea' placeholder='내용을 입력해 주세요.'/> </span>
                </p>
            </div>
        )

    }
}

export default Schedule;