/* eslint-disable */
import React, {useState} from "react";
import { Form } from 'react-advanced-form'
import axios from 'axios';

function CalendarFooter(props){
    
    return (
        <div>
            <h1>{props.clickDate}</h1>
            { props.detailData === '' ? <EmptyDraw /> : 
                                        <DetailDraw 
                                            detailData={props.detailData}
                                            deleteFn={props.deleteFn}
                                        /> }   
            {/* <DetailDraw detailData={props.detailData} /> */}
        </div>
    )
}

function DetailDraw(props){
    let [modify, changeModify] = useState(false);
    let [title, changeTitle] = useState(props.detailData.title);
    let [contents, changeContents] = useState(props.detailData.contents);

    function onUpdate(idx, title, contents){
        
        let url = "http://52.79.235.2:8080/api/scheduleUpdate?idx="+idx+"&title="+title+"&contents="+contents;
        axios.put(url).then( 
            (res)=>{ 
                if( res.data.retCd === '0000' ){
                    alert("수정 완료");
                    changeModify(!modify);
                }else{
                    alert("수정 실패");
                }
            } 
        )
    }

    function onDelete(idx){
        let url = "http://52.79.235.2:8080/api/scheduleDelete?idx="+idx
        axios.delete(url).then(
            (res)=>{
                if( res.data.retCd === "0000" ){
                    alert("삭제 완료");
                    props.deleteFn();
                }
            }
        )
    }

    const handleSumit = (e) => {
        e.preventDefault();
        onUpdate(props.detailData.idx, title, contents)
    }

    function TrueDraw(){
        return (
            <div>
                <form onSubmit={ handleSumit }>
                    <p>
                        <b>제목 : <input value={title} name="title" onChange={ (e)=>{changeTitle(e.target.value)} }></input>  </b>
                    </p>
                    <p>
                        <b>내용 : <input value={contents} name="contents" onChange={ (e)=>{changeContents(e.target.value)} }></input> </b>
                    </p>
                    <p> <button type="submit">수정</button> </p> 
                    {/* // onClick={()=>{ changeModify(!modify) } */}
                </form>
            </div>
        )
    }

    function FalseDraw(){
        return (
            <div>
                <p>
                    <b>제목 : {title}  </b>
                </p>
                <p>
                    <b>내용 : {contents}</b>
                </p>
                <p>
                    <button onClick={ ()=>{ changeModify(!modify) } }>수정</button>
                    <button onClick={ ()=>{ onDelete(props.detailData.idx) } } >삭제</button>
                </p> 
            </div>
        )
    }

    return (
        <div>
           { modify === true ? TrueDraw() : FalseDraw() }
        </div>
    )
}

function EmptyDraw(){
    let [regist, changeRegist] = useState(true);
    let [values, changeValues] = useState({ title : "", contents : "" })

    function EmptyText(){
        return(
            <div>
                <h2>해당 날은 등록된 일정이 없습니다.</h2>
                <p>
                    <button onClick={ ()=>{changeRegist(!regist)} } >등록</button>
                </p>
            </div>
        )
    }

    const handleChange=(e)=>{
        e.preventDefault;
        const {name,value} = e.target;
        changeValues({...values, [name]:value});
        
    }
    
    handleButtonClick=()=>{
        this.form.serialize()
    }
    function RegistInput(){
        return (
            <div>
                <Form ref={form => this.form = form}>
                    <p>
                        <b> 제목 : </b> <input name="title" onChange={ handleChange } value={values.title} />
                    </p>
                    <p>
                        <b> 내용 : </b> <input name="contents" onChange={ handleChange } value={values.contents} />
                    </p>
                    <button type="submit" onClick={ ()=>{handleButtonClick} } >저장</button>
                </Form>
            </div>
        )
    }
    return (
        <div>
            {
                regist ? <EmptyText /> : <RegistInput />
            }
        </div>
    )
}

export default CalendarFooter;