import React, {Component} from "react";
import moment from 'moment';

class DateHeader extends Component{
    dateToArray = (dates) => {
        if(Array.isArray(dates)){
            return dates
        }else if(typeof dates === "string"){
            return dates.split(',')
        }else{
            return ["일", "월","화","수","목","금","토"]
        }
    }

    mapArrayToDate = (dateArray) => {
        try{
            if(dateArray.length !== 7){
              console.log(new Error("dates props must be had 7 date"))
              dateArray = ["일", "월", "화", "수", "목", "금", "토"]
            }
            
            return dateArray.map((date, index) => {
              const className = ()=>{
                let className = "RCA-calendar-date-component";
                if(index === 0){
                  return className + " date-sun"
                }else if(index === 6){
                  return className + " date-sat"
                }else{
                  return className + " date-weekday"
                }
              }
              return (
                <div className={className()} key={"RCA-header-"+date}>
                  {date}
                </div>
              )
            })
          }catch{
            throw new Error ("date must be string or component")
          }
    }

    render(){
        return (
            <div className="RCS-calendar-date-header">
               {this.mapArrayToDate(this.dateToArray(this.props.dates))} 
            </div>
        )
    }
}

// class Week extends Component {
 
//     state = {}
   
//     Days = (firstDayFormat) => {
//       const _days = [];
   
//       for (let i = 0; i < 7; i++) {
   
//         const Day = moment(firstDayFormat).add('d', i);
//         _days.push({
//           yearMonthDayFormat: Day.format("YYYY-MM-DD"),
//           getDay: Day.format('D'),
//           isHolyDay: false
//         });
//       }
   
//       return _days;
//     }
   
//     mapDaysToComponents = (Days, fn = () => { }) => {
   
//       return Days.map((dayInfo, i) => {
   
//         let className = "date-weekday-label";
   
//         if (i === 0) {
//           className = "date-sun";
//         } else if (i === 6) {
//           className = "date-sat"
//         }
   
//         return (
//           <div className={"RCA-calendar-day " + className} onClick={() => fn(dayInfo.yearMonthDayFormat)}>
//             <label className="RCA-calendar-day-label">
//               {dayInfo.getDay}
//             </label>
   
//             {/* <label className="RCA-calendar-day">{dayInfo.getDay}</label> */}
//           </div>
//         )
//       })
//     }
  
  
//     render() {
//       return (
//         <div className="RCA-calendar-week">
//           {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat))}
//         </div>
//       )
//     }
//   }

class mainPage extends Component{
    
   render(){
       return(
        <div className="RCA-calendar-container">
             <DateHeader dates={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"]} />
    
        </div>
       )
      
   }
}

export default mainPage;