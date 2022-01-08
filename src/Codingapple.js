/* eslint-disable */
import React, {useState} from "react";
import './css/Codingapple.css'

function Codingapple(){
    let [title, changeTitle] = useState(['제목1', '제목2'])
    let [count, changeCount] = useState(0);

    let [modal, changeModal] = useState(false);
    let [modalTitle, changeModalTitle] = useState(title[0]);

    let [contents, changeContents] = useState('');

    function titleChange(){
        var newArray = [ ...title ];
        
        newArray[0] = '구본혁';
        changeTitle(newArray);
    }

    let [save, changeSave] = useState('')
    function savefn(){
        var saveArray = [...title]
        saveArray[saveArray.length+1] = save;
        changeTitle(saveArray);
        // changeSave('');
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            {/* function에 ()를 붙이면 바로 실행이 된다는 뜻 */}
            <button onClick={ titleChange }> Click </button>
            {
                title.map((title, i)=>{
                   return(
                    // onClick={()=>{changeModal(!modal)}}
                    <div className="list" key={i} > 
                        <h3 onClick={ ()=>{ changeModalTitle( title )} }> { title } 
                            <span onClick={ ()=>{changeCount(count+1)} }>👌</span> { count }
                        </h3>
                        <p> 2022-01-03 </p>
                        <hr/>
                    </div>
                   ) 
                })
            }

            <div className="publish">
                <input onChange={ (e)=>{changeSave(e.target.value)} }></input>
                <button onClick={ savefn }>내꺼</button>
            </div>

            <div className="publish">
                <input onChange={ (e)=>{changeSave(e.target.value)} }></input>
                <button onClick={ ()=>{
                    var saveArray = [...title]
                    saveArray.unshift(save)
                    changeTitle(saveArray);
                } }>강의</button>
            </div>

            {/* <div className="list">
                <h3 onClick={ ()=>{changeModalTitle( title[1] )}}> { title[1] } <span onClick={ ()=>{changeCount(count+1)} }>👌</span> { count }</h3>
                <p> 2022-02-03 </p>
                <hr/>
            </div> */}
            <input onChange={ (e)=>{ changeContents(e.target.value)} }></input>
            <button onClick={()=>{changeModal(!modal)}}>버튼</button>
            {
                modal === true? <Modal modalTitle={modalTitle} /> : null
            }
        </div>
    );
}

function Modal(props){
 
    return (
      <div className="modal">
            <h2>{props.modalTitle}</h2>
            <p>날짜</p>
            <p>내용</p>
      </div>  
    );
}

export default Codingapple;