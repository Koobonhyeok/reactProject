import React, {Component, useEffect} from "react";
import Schedule from "./Schedule";
import moment from "moment";

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
            <div className="RCA-calendar-date-header">
               {this.mapArrayToDate(this.dateToArray(this.props.dates))} 
            </div>
        )
    }
}


class Week extends Component {
  
    Days = (firstDayFormat) => {
      const _days = [];
      for (let i = 0; i < 7; i++) {
        
        const Day = moment(firstDayFormat).add('d', i);
       
        _days.push({
          yearMonthDayFormat: Day.format("YYYY-MM-DD"),
          getDay: Day.format('D'),
          isHolyDay: false
        });
      }

      return _days;
    }
   
    mapDaysToComponents = (Days, calendarMonthYear , fn = () => { }) => {
      const thisMonth = moment(calendarMonthYear);

      return Days.map((dayInfo, i) => {
   
        let className = "date-weekday-label";
        
        if(!thisMonth.isSame(dayInfo.yearMonthDayFormat,'month')){
            className = "date-notThisMonth";
        }else if (i === 0) {
          className = "date-sun";
        } else if (i === 6) {
          className = "date-sat"
        }
        
        return (
            // onClick={() => fn(dayInfo.yearMonthDayFormat) }
            // ()=>{this.props.moveMonth(-1)}
          <div className={"RCA-calendar-day " + className} onClick={()=>{this.props.check(dayInfo.yearMonthDayFormat)}} >
            <label className="RCA-calendar-day">
              {dayInfo.getDay}
            </label>
   
            {/* <label className="RCA-calendar-day">{dayInfo.getDay}</label> */}
          </div>
        )
      })
    }
  
    
  
    render() {
      return (
        <div className="RCA-calendar-week">
          {/* {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat))} */}
          {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat),this.props.ymOfThisCalendar) }
        </div>
      )
    }
  }

class mainPage extends Component{
  
    state={        
        clickDay:this.props.clickDay
    }
    componentDidUpdate(pervProps, prevState){
        console.log(prevState.clickDay)        
    }

    check=(data)=>{
        // console.log(data)
        this.setState ({
            clickDay:data
        })
        setTimeout(() => console.log("click  ::   "+this.state.clickDay), 300);
        
    }

    Weeks = (monthYear) => {
        const firstDayOfMonth = moment(monthYear).startOf('month');
        const firstDateOfMonth = firstDayOfMonth.get('d');
     
        const firstDayOfWeek = firstDayOfMonth.clone().add('d', -firstDateOfMonth);
        // const lastDayOfThisCalendar = dayOfThisCalendar.clone().add('d', 6 * 7);
        
        const _Weeks = [];
     
        for (let i = 0; i < 6; i++) {
          _Weeks.push((
            <Week 
                key={`RCA-calendar-week-${i}`} 
                ymOfThisCalendar={firstDayOfMonth.format("YYYY-MM")} 
                firstDayOfThisWeekformat={firstDayOfWeek.clone().add('d', i *7).format("YYYY-MM-DD")} 
                check={this.check} />
          ))
        }
        return _Weeks
      }

   render(){
       return(
        <div className="RCA-calendar-container">
             <DateHeader dates={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "sat"]} />
             {this.Weeks(this.props.YM)}
              <Schedule clickDay={this.state.clickDay} />
             
        </div>
       )
      
   }
}

export default mainPage;