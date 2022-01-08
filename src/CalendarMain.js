/* eslint-disable */
import React, {useState, useEffect} from "react";
import CalendarTitle from "./components/Calendar/CalendarTitle";
import CalendarBody from "./components/Calendar/CalendarBody";
import CalendarFooter from "./components/Calendar/CalendarFooter";
import moment from 'moment';
import axios from 'axios';

function CalendarMain(){
    let [calendarYM, changeCalendatYM] = useState(moment().format('YYYY MM'));
    let [yyyyMMdd, changeYyyyMMdd] = useState(moment().format('YYYY MM DD'));
    let [num, changeNum] = useState(moment().format('YYYY MM'));
    let [clickDate, changeClickDate] = useState('');
    let [modal, changeModal] = useState(false);

    const [saveScedule, changeSaveScedule] = useState('');
    let [detailData, changeDetailData] = useState();

    const getDate =async()=>{
      await axios.get('http://52.79.235.2:8080/api/getDate')
                .then( function(res) { callBack(res.data) } );
    }
    function callBack(data){
      changeSaveScedule(JSON.stringify(data));
    }
  
    useEffect( async ()=>{
    
      await getDate();
        // 처음 페이지 들어올때 당일 날짜 확인 하기
        // footer를 볼때 console을 2번 찍어주는 이유 확인 하기
        getDetailSchedule(moment().format("YYYYMMDD"));
    }, []);

    function moveMonthFn( month ){
        
        var cpMonth = moment(num).add(month, 'M').format('YYYY MM')

        changeNum(cpMonth);
        changeCalendatYM(cpMonth);
    }

    function clickDateFn( date ){
        changeClickDate(date);
        // {clickDate === date ? changeModal(!modal): changeModal(!modal)}
        changeModal(!modal);
        
        getDetailSchedule(date);
    }

    function getDetailSchedule(data){
        let url = "http://52.79.235.2:8080/api/getDetailSchedule?day="+moment(data).format("YYYYMMDD");
        // changeDetailData(res.data)
        axios.get(url).then((res)=>{ changeDetailData(res.data) }).catch();

    }

    function deleteFn(){
        changeDetailData('');
    }

    return (
        <div>
            <CalendarTitle 
                calendarYM={calendarYM}
                today={yyyyMMdd}
                moveMonthFn={moveMonthFn}
                />
            <CalendarBody
                YM={calendarYM}
                clickDateFn={clickDateFn}
                saveScedule={saveScedule}
                />
            {
                modal === true?  <CalendarFooter 
                                    clickDate={clickDate} 
                                    detailData={detailData}
                                    deleteFn={deleteFn}
                                    /> : null
            }
            
        </div>
    )
    
}

export default CalendarMain;